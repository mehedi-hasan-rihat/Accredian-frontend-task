import React from "react";
import Circel from "../assets/18512590-ai (1) 1 (1).png";
import AddFriend from "../assets/add_friend.png";
import Layer from "../assets/Layer_10.png";
import Group from "../assets/Group 22036.png";
import Button from "./shared/Button";
import SectionTitle from "./shared/SectionTitle";

export default function HowDoRefer() {
  return (
    <div className="bg-[#EEF5FF] mt-[75px] py-6">
      <div className="max-w-[1360px] mx-auto flex flex-col relative">
        <SectionTitle text={" How Do I"} highlightedText={"Refer?"} />
        <img
          src={Circel}
          alt="Circle design"
          className="h-[490px] mx-auto mt-6 w-full object-center object-contain"
        />

        <div className="flex justify-center gap-50 items-center h-full w-full absolute  px-45">
          <div className="flex flex-col items-center text-center max-w-[193px]">
            <img
              src={AddFriend}
              alt="Submit referrals"
              className=" object-contain object-center"
            />
            <p className="robotoFont leading-5 font-normal mt-6">
              Submit referrals easily via our website’s referral section.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-[193px] text-center">
            <img
              src={Layer}
              alt="Earn rewards"
              className=" object-contain object-center"
            />
            <p className="robotoFont leading-5 font-normal mt-6">
              Earn rewards once your referral joins an Accredian program.
            </p>
          </div>

          <div className="flex flex-col items-center text-center max-w-[193px]">
            <img
              src={Group}
              alt="Receive bonus"
              className=" object-contain object-center"
            />
            <p className="robotoFont leading-5 font-normal mt-6">
              Referrer receives a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>

        <Button text={"Refer Now"} />
      </div>
    </div>
  );
}
