import { landingcard } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landingcard = () => {
  // Split the landingcard array into chunks of 3 elements each
  const chunkedLandingCards = [];
  for (let i = 0; i < landingcard.length; i += 3) {
    chunkedLandingCards.push(landingcard.slice(i, i + 3));
  }

  return (
    <div className="pt-6">
      {chunkedLandingCards.map((row, rowIndex) => (
        <div
          className="flex flex-row justify-between items-center w-full"
          key={rowIndex}
        >
          {row.map((card, cardIndex) => (
            <Link href={card.path} className="mr-3">
            <div
            style={{
                backgroundColor: "rgba(56, 62, 186, 0.1)",
            }}
              className="w-full mr-3 my-3 pt-3 px-2 border rounded-[20px]"
              key={cardIndex}
            >
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h4 className="text-[14px]">{card.name}</h4>
                </div>

                <div>
                  {card.percet === 20 ? (
                    <>
                      <div className="flex flex-row justify-center items-center border border-[#3F42CF] rounded-full p-1">
                        <h4 className="text-[14px] ">{card.percet}</h4>
                        <span>%</span>
                      </div>
                    </>
                  ) : card.percet === 74 ? (
                    <>
                      <div className="flex flex-row justify-center items-center border border-[#27C7AD] rounded-full p-1">
                        <h4 className="text-[14px] ">{card.percet}</h4>
                        <span>%</span>
                      </div>
                    </>
                  ) : card.percet === 100 ? (
                    <>
                      <div className="flex flex-row justify-center items-center bg-[#27C7AD] rounded-full p-1">
                        <h4 className="text-[14px] ">{card.percet}</h4>
                        <span>%</span>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="w-full max-h-[5px] bg-black rounded-full mt-1">
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(56, 62, 186, 1) 0%, rgba(34, 201, 173, 1) 73%)",
                    width: `${card.percet}%`,
                  }}
                  className="h-[5px] rounded-full"
                >
                  <div></div>
                </div>
              </div>
              <div className="pt-7">
                <div>
                  <h4 className="text-[11px]">{card.desc}</h4>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  maxHeight: "60px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  padding: "5px",
                  borderRadius: "30px",
                  marginTop: "10px",
                }}
                className=""
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-row justify-between items-center gap-x-3">
                    <Image
                      src={"/icons/date.png"}
                      width={15}
                      height={15}
                      alt="logo"
                    />
                    <div>
                      <h3 className="text-[12px]">Aug, 14, 2023</h3>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[12px]">
                      <span className="text-[#2AA89A]">20</span> Tasks
                    </h3>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center px-2 py-4">
                <div className="w-[50%] flex flex-row justify-center items-center">
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
                <Image
                  src={"/icons/leftArrow.png"}
                  width={8}
                  height={8}
                  alt="logo"
                />
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Landingcard;
