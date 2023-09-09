import Landingcard from "@/Components/LandingCard/Landingcard";
import Layer from "@/Components/Layer/Layer";
import Image from "next/image";
import React from "react";

const Project = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        paddingTop: "15px",
        paddingLeft: "25px",
        overflowY: "scroll",
        maxHeight: "476px",
      }}
      className="border border-[#4C5C75] rounded-[30px] w-full"
    >
      <div className="flex flex-row justify-between w-full pr-5">
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
        <div className="flex flex-row justify-end items-center w-[25%] gap-x-4">
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
      <div className="pr-5">
        <Layer />
      </div>
      <div className="pr-1">
        <Landingcard />
      </div>
    </div>
  );
};

export default Project;
