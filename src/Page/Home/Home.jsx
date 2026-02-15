import React from "react";
import Banner from "./Banner/Banner";
import Random1 from "./Random1/Random1";
import Random5 from "./Random5/Random5";
import Random4 from "./Random4/Random4";
import Random3 from "./Random3/Random3";
import Random2 from "./Random2/Random2";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Random1></Random1>
      <Random2></Random2>
      <Random3></Random3>
      <Random4></Random4>
      <Random5></Random5>
    </div>
  );
};

export default Home;
