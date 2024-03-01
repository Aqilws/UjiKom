import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Login } from "../login/Login";


export const AdminTour = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/travel")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const RemoveItem = (id) => {
    fetch("http://localhost:3004/travel/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  const [isLogin, setIsLogin] = useState(false)
  

  return (
    <div className="mt-10">
      {/* {!isLogin ? 
        <Login onLogin={setIsLogin} />
       :  */}
        <div>
          <div className="flex justify-between items-center px-10">
            <h1 className="text-3xl md:text-5xl font-bold mt-10 text-start ml-10">
              Choose Your tour
            </h1>
            <Link
              to={`/create`}
              className="w-28 h-12 bg-slate-800 rounded-md flex justify-center items-center text-slate-200 font-semibold"
            >
              Create
            </Link>
          </div>
          <div className=" mt-5 p-10 inline-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            {Data.map((item) => (
              <div className="w-60 flex flex-col hover:skew-x-2 hover:scale-105">
                <img src={item.img} alt={item.name} className="mb-5 rounded-xl h-40" />
                <h1 className="font-semibold">{item.name}</h1>
                <h3>${item.price}/Person</h3>

                <div className="flex justify-around gap-2 mt-5">
                  <Link
                    to={`/view/${item.id}`}
                    className="w-full bg-blue-600 rounded-md font-semibold text-slate-200"
                  >
                    View
                  </Link>
                  <Link
                    to={`/edit/${item.id}`}
                    className="w-full bg-green-600 rounded-md font-semibold text-slate-200"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => {
                      RemoveItem(item.id);
                    }}
                    className="w-full bg-red-600 rounded-md font-semibold text-slate-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>            
      {/* }  */}
    </div>
  );
};
