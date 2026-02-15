import React from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";


const useRole = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ["user-role", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/users/${user?.email}/role`);
      return res.data.role;
    },
  });

  return { role, roleLoading };
};

export default useRole;