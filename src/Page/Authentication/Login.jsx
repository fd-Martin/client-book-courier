
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../Components/Shared/SocialLogin";
import Loading from "../../Components/Loading/Loading";



const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { signInUser, resetPassword } = useAuth();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  // 🔐 Login Handler
  const handleLogin = (data) => {
    setLoading(true);
    signInUser(data.email, data.password)
      .then(() => {
        navigate(location.state?.from?.pathname || "/");
        setLoading(false);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.message,
          timer: 2000,
          showConfirmButton: false,
        });
        setLoading(false);
      });
  };

  // 🔁 Forget Password Handler
  const handleForgetPassword = () => {
    const email = getValues("email");

    if (!email) {
      return Swal.fire({
        icon: "warning",
        title: "Please enter your email first",
        timer: 2000,
        showConfirmButton: false,
      });
    }

    resetPassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Password reset email sent!",
          text: "Check your inbox.",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.message,
        });
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="card bg-base-100 w-full max-w-md shadow-2xl p-10">
      <h1 className="text-5xl font-bold text-secondary text-center">
        Login now!
      </h1>

      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">

            {/* Email */}
            <label className="label text-primary md:text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              className="input my-3 w-full"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 font-semibold">
                Email is required
              </p>
            )}

            {/* Password */}
            <label className="label text-primary md:text-xl font-bold">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="input w-full pr-12"
                placeholder="Password"
                {...register("password", { required: true })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 font-semibold">
                Password is required
              </p>
            )}

            {/* Forgot Password */}
            <div className="mt-2">
              <button
                type="button"
                onClick={handleForgetPassword}
                className="link link-hover"
              >
                Forgot password?
              </button>
            </div>

            <button className="btn btn-primary mt-4 w-full">
              Login
            </button>

          </fieldset>
        </form>

        <p className="mt-4">
          Don't have an account?
          <Link state={location.state} to="/authentication/register">
            <span className="text-secondary text-xl font-bold ml-1">
              Register
            </span>
          </Link>
        </p>

        <SocialLogin />
      </div>
    </div>
  );
};

export default Login;