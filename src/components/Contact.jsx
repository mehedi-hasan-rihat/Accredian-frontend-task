import React from "react";
import contact from "../assets/div.w-20.png";
import Arrow from "../assets/Vector (1).png";
import Circle from "../assets/cta-circle.d94f7e66bfe364d78b6e.svg.png";

export default function Contact() {
  return (
    <div className="max-w-[1360px] mt-[134px] px-10 pt-2 mb-20 h-full rounded-xl mx-auto bg-[#1A73E8] flex justify-between items-center text-white">
    <div className="flex items-center gap-4 ">
      <img src={contact} alt="Contact Icon" className="object-contain w-20" />
      <div className="">
        <p className="text-[28px] font-semibold">
          Want to delve deeper into the program?
        </p>
        <p>
          Share your details to receive expert insights from our program team!
        </p>
      </div>
    </div>
  
    <div className="relative flex-1 flex justify-end  p-15">
      <img src={Circle} alt="Circle Background" className="absolute right-8 top-0  w-full h-full object-cover" />
      <div className="bg-white text-[#3B82F6] relative flex items-center gap-2 p-2 px-4 w-max rounded-md cursor-pointer">
        <p>Get in touch</p>
        <img src={Arrow} alt="Arrow" />
      </div>
    </div>
  </div>
  
  );
}
