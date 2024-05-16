import React from "react";
import { LogoSvg, ExerciseLogoSvg, TickSvg } from "../../assets";

const Home = () => {
  return (
    <div className="relative">
      <div className="bg-cover bg-right-top  h-[100%] bg-fitness-background">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black  to-transparent  to-transparen  from-1% to-100%"></div>
        <div className="flex justify-between py-6 px-[80px]">
          <div
            id="logo"
            className="relative flex gap-2 justif y-center items-center"
          >
            <img src={LogoSvg} alt="Fitness Logo" />
            <span className="font-[Kodchasan] font-[700] text-[#FF7A00]">
              NG-GYM
            </span>
          </div>
          <div id="menu" className="h-[32px]">
            <ul className="[&>li]:cursor-pointer relative font-[Inter] flex font-[400] text-white text-[18px] space-x-8">
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>Class</span>
              </li>
              <li>
                <span>Price</span>
              </li>
              <li>
                <span>About</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
              <div>
                <span>|</span>
              </div>
              <li>
                <span className="text-[#FF7A00] text-[20px] font-[600]">
                  Sign In
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col font-[karantina] items-start justify-start mt-[96px] px-[80px]">
          <div className="w-[542px]  leading-[100px] font-[700]  flex flex-col text-white text-[80px] tracking-[3px] relative">
            <span className="flex ">
              Shape Your Body,
              <img
                className="absolute top-[17px] right-[40px]"
                src={ExerciseLogoSvg}
                alt="Exercise Logo"
              />
            </span>
            <span>
              Transform Your Life
              <img
                className="px-7.5 absolute top-[63px] right-[335px]"
                src={TickSvg}
                alt="Tick Icon"
              />
            </span>
          </div>
          <div className="relative text-leading-[32px] font-[Inter]  flex flex-col text-white  text-[24px]  mt-4 ">
            <span className="!font-[300] leading-[32px]">
              Join our gym club today and embark on a
            </span>
            <span>journey towards a healthier, fitter lifestyle.</span>
          </div>
          <div className="font-sans flex flex-col text-white text-base font-light mt-[40px]">
            <button className="flex relative bg-[#FF7A00] w-[255px] h-[64px] px-[74px] py-[16px] font-[Inter] font-[600] text-[24px] text-white items-center justify-center rounded-full">
              Join Now
            </button>
          </div>
        </div>
        <div className="flex relative  px-[80px] text-white mt-[120px] pb-[270px]">
          <div className="flex flex-col">
            <div className="font-[600] text-[32px]">12</div>
            <div className="text-[16px]">Coach</div>
          </div>
          <div className="w-[1px] bg-gray-500 mx-[30px]"></div>
          <div className="flex flex-col items-center">
            <div className=" font-[600] text-[32px]">5k</div>
            <div className="text-[16px]">Member</div>
          </div>
          <div className="w-[1px] bg-gray-500 mx-[30px]"></div>
          <div className="flex flex-col">
            <div className=" font-[600] text-[32px]">6</div>
            <div className="text-[16px]">Exercise type</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
