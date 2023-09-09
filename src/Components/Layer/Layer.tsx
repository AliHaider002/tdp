import React from "react";
import Image from "next/image";

const Layer = () => {
  return (
    <div className="pt-2">
      <div className="flex flex-row justify-center items-center w-full max-h-[30px] opacity-20 overflow-hidden">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
          <div key={v} className="relative w-120 h-30">
            <Image
              src="/icons/layer.png"
              layout="fill" // This sets the image to fill its parent container
              alt="logo"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layer;
