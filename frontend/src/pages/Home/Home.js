import React, { useState } from "react";
import Layout from "../../components/Layouts/Layout";
import "../../styles/HomeStyle.css";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />

        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />


        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
      </Layout>
    </>
  );
};

export default Home;