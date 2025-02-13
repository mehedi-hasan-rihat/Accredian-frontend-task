import React from "react";
import Refer from "../assets/refer.png";
import Money from "../assets/money.png";
import MoneyFull from "../assets/moneyFull.png";

export default function Banner() {
  return (
    <div className="bg-[#EEF5FF] shadow-md h-[690px] mt-7 container mx-auto rounded-3xl flex items-center p-6 relative">
      {/* Left Section */}
      <div className="max-w-[500px] pl-11 flex flex-col space-y-20">
        <img
          src={Money}
          alt="money"
          className="h-auto w-auto absolute top-0 left-0"
        />
        <div className="space-y-6">
          <p className="robotoFont font-extrabold text-[88px] leading-none">
            Let’s Learn & Earn
          </p>
          <p className="robotoFont font-normal text-4xl   text-[#1A202C] max-w-[370px]">
            Get a chance to win up-to{" "}
            <span className="text-[#1A73E8] font-semibold">Rs. 15,000</span>
          </p>
        </div>
        <button className="bg-[#1A73E8] rounded-md py-2 px-5 w-max text-white ">
          Reffer Now
        </button>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex justify-center ">
        <img
          src={Money}
          alt="money"
          className="h-auto w-auto rotate-y-180 absolute top-0 right-0"
        />
        <div className="relative">
          {" "}
          <img className="z-50 relative" src={Refer} alt="refer" />
         <img
            src={MoneyFull}
            alt="money"
            className="h-auto w-auto rotate-y-180 absolute top-0 left-[25%]  rotate-180"
          />
           <img
            src={MoneyFull}
            alt="money"
            className="h-auto w-auto  absolute bottom-15 z-50 left-[8%]"
          />

<img
            src={MoneyFull}
            alt="money"
            className="h-auto w-auto  absolute bottom-70 rotate-180 right-0"
          />
        </div>
      </div>
    </div>
  );
}
