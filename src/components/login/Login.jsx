import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Login = ({onLogin}) => {
  const [loginData, setLogin] =useState({
    username: "",
    pass: "",
})

function handleChange(e) {
  let data = {...loginData}

  data[e.target.name]= e.target.value;
  setLogin(data)
}
  
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      const res = await fetch('http://localhost:3004/user')
      const data = await res.json()
      const isValid = data.find(a => a.username === loginData.username && a.pass === loginData.pass)
      if (isValid) {
        navigate("/admin")
        // onLogin(true)
      }else{
        alert("akun tidak ditemukan")
      }
    }catch{
      alert("Error")
    }
  }





  return (
    <div className="w-screen h-[80vh]  flex justify-center items-center">
      <div className=" w-4/5 h-[90%] bg-slate-800 flex justify-center items-center rounded-md">
        <form
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={handleSubmit}
        >
          <h2 className="text-slate-200 text-4xl mb-16 font-bold">Login</h2>
          <input
            value={loginData.username}
            onChange={handleChange}
            type="text"
            name="username"
            placeholder="Masukan Username"
            className="w-[60vw] h-10 rounded-md p-4 bg-none"
          />
          <input
            value={loginData.pass}
            onChange={handleChange}
            type="password"
            name="pass"
            placeholder="Masukan Password"
            className="w-[60vw] h-10 rounded-md p-4 bg-none"
          />

          <button
            type="submit"
            className="w-28 h-8 bg-slate-100 text-slate-800 rounded-md mt-8"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
