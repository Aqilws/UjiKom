import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Login } from "../login/Login";

export const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [Data, setData] = useState({
    id:"",
    name: "",
    price: "",
    desc:"",
    img: "",
  });

  useEffect(() => {
    fetch("http://localhost:3004/travel/" + id)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setData(resp)
    }).catch((err) => {
        console.log(err.message);
    });
  }, []);


  const handleChage = (e) => {
    let data = { ...Data};

    data[e.target.name] = e.target.value;
    setData(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3004/travel/"+id, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(Data),
    })
      .then((res) => {
        alert("Create success");
        navigate("/tour");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  console.log(Data)

  




  return (
    <div className="w-screen h-[120vh]  flex justify-center items-center">
      
      <div className=" w-4/5 h-[90%] bg-slate-800 flex justify-center items-center rounded-md">
        <form
          action=""
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-slate-200 text-4xl mb-8 font-bold">Edit Data</h2>
          <input
          required
            type="text"
            value={Data.name}
            onChange={handleChage}
            name="name"
            placeholder="Masukan nama"
            className="w-[60vw] h-10 rounded-md p-4 bg-none"
          />
          <input
          required
            type="text"
            value={Data.price}
            onChange={handleChage}
            name="price"
            placeholder="Masukan Price"
            className="w-[60vw] h-10 rounded-md p-4 bg-none"
          />
          <textarea required name="desc" id="" cols="30" rows="10" value={Data.desc}  className="w-[60vw] h-24 rounded-md p-4 bg-none"
            onChange={handleChage} ></textarea>
          <input
          required
            type="text"
            value={Data.img}
            onChange={handleChage}
            name="img"
            placeholder="Http Only"
            className="w-[60vw] h-10 rounded-md p-4 bg-none"
          />
          <button
            type="submit"
            className="w-28 h-8 bg-slate-100 text-slate-800 rounded-md mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
