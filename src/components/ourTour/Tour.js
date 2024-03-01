import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "flowbite-react";

export const Tour = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/travel")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="mt-10">
          <div className="flex justify-between items-center px-10">
            <h1 className="text-3xl md:text-5xl font-bold mt-10 text-start ml-10">
              Choose Your tour
            </h1>
          </div>
          <div className=" mt-5 p-10 inline-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            {Data.map((item) => (
              <Link to={`/view/${item.id}`}>
              <div className="w-60 flex flex-col hover:skew-x-2 hover:scale-105">
                <img src={item.img} alt={item.name} className="mb-5 rounded-xl h-40" />
                <h1 className="font-semibold">{item.name}</h1>
                <h3>${item.price}/Person</h3>
                <div className="w-full flex justify-center items-center">
                <Rating>
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star />
                  <Rating.Star filled={false} />
                </Rating>
              </div>
              </div>
              </Link> 
            ))}
          </div>
    </div>
  );
};
