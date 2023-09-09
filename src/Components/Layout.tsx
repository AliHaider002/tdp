// components/Layout.js
import { sideLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import backgroundImg from '';


const Layout = ({ children }: any) => {
  const asideStyles = {
    backgroundImage: `url("/images/background.png")`, // Use the imported background image
    backgroundPosition: 'top right', // Position the image at the top right
    backgroundRepeat: 'no-repeat', // Prevent image from repeating
    backgroundSize: '60% auto', // Cover the entire container
  };
  return (
    <div className="bg-[#192841] text-[#FEFFFD] flex h-screen">
      <aside
        style={{
          borderBottomRightRadius: "25px",
        }}
        className="bg-[#2F3E53] px-4 py-8 w-4/4 laptop:max-w-[13%] border border-[#4C5C75] flex flex-col justify-between items-center"
      >
        <div className="flex flex-col gap-y-5 h-full">
          <div>
            <Image
              src={"/images/logo.png"}
              width={120}
              height={50}
              alt="logo"
            />
          </div>
          <div className="flex flex-col justify-between h-[100%]">
            <div>
              <ul>
                <div className="flex flex-col justify-between">
                  <div className="flex flex-col gap-y-2">
                    {sideLinks.map((v, i) => (
                      <li className="mb-2" key={i}>
                        <Link href={v.path}>
                        <div className="flex flex-row justify-between items-center gap-x-2">
                          
                          <div className="w-[20%]">
                            <Image
                              src={v.imageUrl}
                              width={500}
                              height={500}
                              alt="logo"
                              layout="responsive"
                            />
                          </div>
                          <div className="w-[80%]">
                            <h4 className="text-[14px]">{v.name}</h4>
                          </div>
                          
                        </div>
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </ul>
            </div>
            <div className="flex flex-row justify-between items-center gap-x-2">
              <div className="w-[20%]">
                <Image
                  src={"/icons/help.png"}
                  width={500}
                  height={500}
                  alt="logo"
                  layout="responsive"
                />
              </div>
              <div className="w-[80%]">
                <h4 className="text-[14px]">Help</h4>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col gap-y-5">
          <div className="flex flex-row gap-x-2">
            <div className="w-[20%]">
              <Image
                src={""}
                width={500}
                height={500}
                alt="logo"
                layout="responsive"
              />
            </div>
            <div className="w-[80%]">
              <h4 className="text-[14px]"></h4>
            </div>
          </div>
        </div> */}
      </aside>
      <div 
      style={
        asideStyles
      }
      className="flex-1 h-full">
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
