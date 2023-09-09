import Image from "next/image";
import React from "react";

interface props {
  name: string;
  desc: string;
  coloredText: string;
  backButton?: boolean;
}

const Header = ({ name, desc, coloredText, backButton }: props) => {
  const parts = desc.split(`${coloredText}`);
  return (
    <>
      <header className="pb-8">
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row justify-between items-center gap-x-2">
            <div>
            {
              backButton ? (
                <>
                <div className="w-[30px] h-[30px] flex flex-row justify-center items-center bg-[#455265] border border-gray-400 rounded-sm">
                <Image
                  src={"/icons/back.png"}
                  width={15}
                  height={15}
                  alt="logo"
                />
                </div>
                </>
              ) : (
                ""
              )
            }
            </div>
            <div>
            <h1 className="text-[#F7FDFF] text-xl">{name}</h1>
            {/* <h4 className="text-[]">{desc}</h4> */}
            <h4 className="text-[#A0ADC0] text-sm">
              {parts[0]}
              <span className="text-[#2AA89A]">{coloredText}</span>
              {parts[1]}
            </h4>
            </div>
            
          </div>
          <div
            style={{
              width: "55%",
              maxHeight: "60px",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              padding: "5px",
              borderRadius: "30px",
            }}
            className="border border-[#4C5C75] flex flex-row justify-between items-center"
          >
            <div className="bg-[#243144] p-2 border border-[#4C5C75] w-[30%] rounded-full">
              <div className="flex flex-row justify-between">
                <Image
                  src={"/icons/askme.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
                <h2>Ask me Anything</h2>
              </div>
            </div>
            <div className="w-[60%] flex flex-row justify-between items-center px-10">
              <div>
                <Image
                  src={"/icons/sheet.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  src={"/icons/calender.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  src={"/icons/message.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
              </div>
              <div>
                <Image
                  src={"/icons/bell.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
              </div>
            </div>
            <div className="w-[10%] flex flex-row justify-end px-2">
              <div className="bg-[#D9D9D9] w-[100%] h-[40px] border borde-[50%] rounded-[50%] flex flex-col justify-center items-center">
                <h1 className="hidden">d</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
