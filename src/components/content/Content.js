import React from "react";

import { Rating } from "flowbite-react";
import { Link } from "react-router-dom";

export const Content = ({ data }) => {
  return (
    <div className="mt-10 p-5">
      <h1 className="text-3xl md:text-5xl font-bold mt-10 text-start ml-10">
        Choose Your tour
      </h1>
      <div className=" mt-5 p-10 inline-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {data.map((item) => (
          <Link to={`/view/${item.id}`}>
            <div className="w-60 flex flex-col hover:skew-x-3 hover:scale-105">
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
