import { Service } from "./service/Service";
import { Content } from "./content/Content";
import { Banner } from "./banner/Banner";
import React, { useEffect, useState } from "react";
import { Testimoni } from "./testimoni/Testimoni";

export const Home = () => {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/travel?_limit=4")
      .then((res) => res.json())
      .then((json) => setTravel(json));
  }, []);
  
  return (
    <>
        <Banner />
        <Service />
        <Content data={travel}/>
        <Testimoni/>
    </>
  )
}
