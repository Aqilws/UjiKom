import React from "react";
import Img from "../../assets/pepsi-logo-94D7DEF922-seeklogo.com.png";

export const Testimoni = () => {
  return (
    <div className="w-[98vw] h-[60vh]  m-2 rounded-md text-slate-200 p-4 flex flex-col gap-8 items-center">
      <h1 className="text-3xl md:text-5xl text-slate-800 font-bold">Testimony</h1>
      <div className="w-full h-32 bg-slate-800 relative rounded-md  grid">
        <img src={Img} alt="#" className="w-20 absolute -top-5 left-3" />
        <h3 className="text-start ml-28 mt-4 text-lg font-semibold">
          Jhon Doe
        </h3>
        <p className="w-5/6 text-center place-self-center mb-5 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sequi
          blanditiis? Totam exercitationem hic, modi consectetur quo ipsam
          aperiam magnam? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nisi eos sed quis mollitia illum eligendi possimus soluta
          dolorem dolore ratione?
        </p>
      </div>
      <div className="w-full h-32 bg-slate-800 relative rounded-md  grid">
        <img src={Img} alt="#" className="w-20 absolute -top-5 right-3" />
        <h3 className="text-end mr-28 mt-4 text-lg font-semibold">
          Jhon Doe
        </h3>
        <p className="w-5/6 text-center place-self-center mb-5 text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos, sequi
          blanditiis? Totam exercitationem hic, modi consectetur quo ipsam
          aperiam magnam? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Nisi eos sed quis mollitia illum eligendi possimus soluta
          dolorem dolore ratione?
        </p>
      </div>
      
    </div>
  );
};
