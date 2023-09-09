import { landingcard, landingcard2 } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Landingcard2 = () => {
  // Split the landingcard array into chunks of 3 elements each
  const chunkedLandingCards = [];
  for (let i = 0; i < landingcard.length; i += 3) {
    chunkedLandingCards.push(landingcard.slice(i, i + 3));
  }

  return (
    <div className="pt-6">
      <div className="flex flex-row justify-between items-center gap-x-2 h-[260px]">
      <div
          style={{
            width: "33%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            paddingTop: "15px",
            paddingLeft: "25px",
            paddingBottom: "10px",
            overflowY: "scroll",
            // maxHeight: "476px",
            height: "100%",
            borderRadius: "30px",
          }}
          className="flex flex-col justify-start border border-gray-400"
        >
          <div className="flex flex-row justify-start items-center w-full">
            <h3>Pending ({landingcard2[0].pending.length})</h3>
          </div>
          {landingcard2[0].pending.map((card, i) => (
            <Link href={card.path} className="mr-3">
              <div
                style={{
                  backgroundColor: "rgba(56, 62, 186, 0.1)",
                }}
                className="w-full mr-3 my-3 pt-3 px-2 border rounded-[20px]"
                key={i}
              >
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h4 className="text-[14px]">{card.name}</h4>
                  </div>

                  <div className="flex flex-row justify-end items-center gap-x-1">
                    <div>
                    <Image
                  src={"/icons/tag.png"}
                  width={15}
                  height={15}
                  alt="logo"
                />
                    </div>
                    <div>
                    <Image
                  src={"/icons/more.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center mt-4">
                <div
                  style={{
                    width: "50%",
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
                  </div>
                </div>
                <div 
                style={{
                    marginTop: "10px",
                }}
                >
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
                
                <div className="w-full max-h-[5px] bg-black rounded-full mt-4">
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
                  <div className="w-[20%] flex flex-row justify-end items-center gap-x-2">
                    <Image
                      src={"/icons/comments.png"}
                      width={20}
                      height={20}
                      alt="logo"
                    />
                    <Image
                      src={"/icons/attechments.png"}
                      width={20}
                      height={20}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div
          style={{
            width: "33%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            paddingTop: "15px",
            paddingLeft: "25px",
            overflowY: "scroll",
            paddingBottom: "10px",
            // maxHeight: "476px",
            height: "100%",
            borderRadius: "30px",
          }}
          className="flex flex-col justify-start border border-gray-400"
        >
          <div className="flex flex-row justify-start items-center w-full">
            <h3>In Progress ({landingcard2[0].inProgress.length})</h3>
          </div>
          {landingcard2[0].inProgress.map((card, i) => (
            <Link href={card.path} className="mr-3">
            <div
              style={{
                backgroundColor: "rgba(56, 62, 186, 0.1)",
              }}
              className="w-full mr-3 my-3 pt-3 px-2 border rounded-[20px]"
              key={i}
            >
              <div className="flex flex-row justify-between items-center">
                <div>
                  <h4 className="text-[14px]">{card.name}</h4>
                </div>

                <div className="flex flex-row justify-end items-center gap-x-1">
                  <div>
                  <Image
                src={"/icons/tag.png"}
                width={15}
                height={15}
                alt="logo"
              />
                  </div>
                  <div>
                  <Image
                src={"/icons/more.png"}
                width={20}
                height={20}
                alt="logo"
              />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between items-center mt-4">
              <div
                style={{
                  width: "50%",
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
                </div>
              </div>
              <div 
              style={{
                  marginTop: "10px",
              }}
              >
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
              
              <div className="w-full max-h-[5px] bg-black rounded-full mt-4">
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
                <div className="w-[20%] flex flex-row justify-end items-center gap-x-2">
                  <Image
                    src={"/icons/comments.png"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                  <Image
                    src={"/icons/attechments.png"}
                    width={20}
                    height={20}
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          </Link>
          ))}
        </div>
        <div
          style={{
            width: "33%",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            paddingTop: "15px",
            paddingLeft: "25px",
            paddingBottom: "10px",
            overflowY: "scroll",
            // maxHeight: "476px",
            height: "100%",
            borderRadius: "30px",
          }}
          className="flex flex-col justify-start border border-gray-400"
        >
          <div className="flex flex-row justify-start items-center w-full">
            <h3>Done ({landingcard2[0].done.length})</h3>
          </div>
          {landingcard2[0].done.map((card, i) => (
            <Link href={card.path} className="mr-3">
              <div
                style={{
                  backgroundColor: "rgba(56, 62, 186, 0.1)",
                }}
                className="w-full mr-3 my-3 pt-3 px-2 border rounded-[20px]"
                key={i}
              >
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <h4 className="text-[14px]">{card.name}</h4>
                  </div>

                  <div className="flex flex-row justify-end items-center gap-x-1">
                    <div>
                    <Image
                  src={"/icons/tag.png"}
                  width={15}
                  height={15}
                  alt="logo"
                />
                    </div>
                    <div>
                    <Image
                  src={"/icons/more.png"}
                  width={20}
                  height={20}
                  alt="logo"
                />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center mt-4">
                <div
                  style={{
                    width: "50%",
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
                  </div>
                </div>
                <div 
                style={{
                    marginTop: "10px",
                }}
                >
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
                
                <div className="w-full max-h-[5px] bg-black rounded-full mt-4">
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
                  <div className="w-[20%] flex flex-row justify-end items-center gap-x-2">
                    <Image
                      src={"/icons/comments.png"}
                      width={20}
                      height={20}
                      alt="logo"
                    />
                    <Image
                      src={"/icons/attechments.png"}
                      width={20}
                      height={20}
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landingcard2;
