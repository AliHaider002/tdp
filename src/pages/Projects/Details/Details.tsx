import Landingcard2 from "@/Components/LandingCard2/LandingCard2";
import Layer from "@/Components/Layer/Layer";
import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        paddingTop: "15px",
        paddingLeft: "25px",
        overflowY: "hidden",
        maxHeight: "476px",
      }}
      className="border border-[#4C5C75] rounded-[30px] w-full "
    >
      <div className="w-[98%] flex flex-row justify-between items-center gap-x-1 ">
        <div className="w-[45%] flex flex-row justify-center items-center gap-x-1">
          <div>
            <div className="w-[40px] h-[40px] bg-[#D9D9D9] rounded-full"></div>
          </div>
          <div>
            <h4 className="text-[11px]">
              Project Description Project Description Project Description
              Project Description Project Description Project Description
              Project Description Project Description
            </h4>
          </div>
        </div>
        <div className="w-[45%] flex flex-row justify-end items-center gap-x-1">
          <div
            style={{
              // width: "55%",
              maxHeight: "60px",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              // padding: "5px",
              borderRadius: "30px",
            }}
            className="w-[70%] h-[40px] p-2 flex flex-row justify-between items-center gap-x-1"
          >
            <div className="flex flex-row justify-between items-center gap-x-3">
              <Image
                src={"/icons/date.png"}
                width={18}
                height={18}
                alt="logo"
              />
              <div>
                <h3 className="text-[12px]">Aug, 14, 2023</h3>
                <h3 className="text-[11px] text-gray-400">In 2 days</h3>
              </div>
            </div>
            <div>
              <h3 className="text-[12px]">
                <span className="text-[#2AA89A]">20</span> Tasks
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[98%] max-h-[5px] bg-black rounded-full mt-4">
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(56, 62, 186, 1) 0%, rgba(34, 201, 173, 1) 73%)",
            width: `100%`,
          }}
          className="h-[5px] rounded-full"
        >
          <div></div>
        </div>
      </div>
      <div className="w-[98%] flex flex-row justify-between items-center px-2 py-4">
        <div className="w-[20%] flex flex-row justify-center items-center">
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            className="w-[25px] h-[25px] rounded-full border flex flex-row justify-center items-center"
          >
            <h3 className="text-[#2AA89A] text-[10px]">+2</h3>
          </div>
        </div>
        <div className="w-[20%] flex flex-row justify-end items-center">
          <div className="flex flex-row justify-center items-center border border-[#27C7AD] rounded-full p-1">
            <h4 className="text-[14px] ">74</h4>
            <span>%</span>
          </div>
        </div>
      </div>
      <div className="pr-5">
        <Layer />
      </div>
      <div className="flex flex-row justify-between items-center w-full pt-2 pr-5">
        <div>
            <h5 className="text-[14px]">Keep up to good work!</h5>
        </div>
        <div className="flex flex-row justify-end items-center w-[40%] gap-x-4">
          <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            padding: "5px 10px",
            borderRadius: "30px",
          }}
          className="flex flex-row justify-between items-center w-[45%] border border-gray-400"
        >
          <div className="flex flex-row justify-center items-center gap-x-4 ">
            <div>
              <Image
                src={"/icons/search.png"}
                width={20}
                height={20}
                alt="logo"
              />
            </div>
            <div>
              <h1>Search</h1>
            </div>
          </div>
          <div>
            <Image src={"/icons/cross.png"} width={20} height={20} alt="logo" />
          </div>
        </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "5px",
              borderRadius: "5px",
            }}
            className="flex flex-row justify-center items-center gap-x-3 border border-gray-400"
          >
            <div>
              <h4>Filter</h4>
            </div>
            <div>
              <Image
                src={"/icons/downArrow.png"}
                width={20}
                height={20}
                alt="logo"
              />
            </div>
          </div>
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              padding: "5px",
              borderRadius: "5px",
            }}
            className="flex flex-row justify-center items-center gap-x-3 border border-gray-400"
          >
            <div>
              <h4>Sort By</h4>
            </div>
            <div>
              <Image
                src={"/icons/sort.png"}
                width={20}
                height={20}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pr-1">
        <Landingcard2 />
      </div>
    </div>
  );
};

export default Details;
