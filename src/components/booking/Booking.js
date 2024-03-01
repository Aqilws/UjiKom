import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

export const Booking = () => {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/travel?_limit=2")
      .then((res) => res.json())
      .then((json) => setTravel(json));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-3xl md:text-5xl font-bold mt-10 text-start ml-10">Your Destination Booking</h1>
      <div className=" mt-5 p-10 inline-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {travel.map((item) => (
          <div className="w-60 flex flex-col hover:skew-x-3 hover:scale-105">
            <img src={item.img} alt={item.name} className="mb-5 rounded-xl h-40" />
            <h1 className="font-semibold">{item.name}</h1>
            <h3>${item.price}/Person</h3>
            <Link to={`/edit/${item.id}`}>Edit</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
