import Layer from "@/Components/Layer/Layer";
import { Transition } from "@headlessui/react";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function Drawer({ isOpen, onClose }: Props) {
  return (
    <Transition
      show={isOpen}
      enter="transition-transform transform transition-opacity opacity-0"
      enterFrom="translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="transition-transform transform transition-opacity opacity-100"
      leaveFrom="translate-x-0 opacity-100"
      leaveTo="translate-x-full opacity-0"
    >
      <div className="fixed inset-y-0 right-0 w-64 shadow-lg">
        {/* Drawer content */}
        <div
          style={{
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            width: "100%",
            padding: "20px",
            maxWidth: "300px",
          }}
          className="h-screen p-4 bg-white border border-gray-400"
        >
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">Add New Task</h2>
            </div>
            <div onClick={onClose} className="cursor-pointer">
              <Image
                src={"/icons/close.png"}
                width={20}
                height={20}
                alt="logo"
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-start items-center overflow-hidden opacity-20 pt-3">
            <Image
              src={"/icons/layer.png"}
              width={100}
              height={20}
              alt="logo"
            />
            <Image
              src={"/icons/layer.png"}
              width={100}
              height={20}
              alt="logo"
            />
            <Image
              src={"/icons/layer.png"}
              width={100}
              height={20}
              alt="logo"
            />
            {/* <Layer /> */}
          </div>

          <div className="w-full pt-3">
            <h4
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
              className="text-[12px] text-gray-400"
            >
              InstructionsInstructionsInstructionsInstructions
            </h4>
          </div>

          <div>
            <div className="w-full pt-6">
              <h4
                style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                className="text-[14px] text-gray-250"
              >
                Task name*
              </h4>
            </div>
            <div className="w-full pt-2">
              <div className="h-[3px] bg-gray-400 rounded-md"></div>
            </div>
          </div>

          <div>
            <div className="w-full pt-6 flex flex-row justify-between items-center">
              <h4
                style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                className="text-[14px] text-gray-200"
              >
                Deadline*
              </h4>
              <Image
                src={"/icons/calender.png"}
                width={20}
                height={20}
                alt="logo"
              />
            </div>
            <div className="w-full pt-2">
              <div className="h-[3px] bg-gray-400 rounded-md"></div>
            </div>
          </div>

          <div className="pt-6 gap-y-1">
            <h4
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
              className="text-[10px] text-gray-200"
            >
              Label
            </h4>
            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between items-center gap-x-2">
                <Image
                  src={"/icons/tag.png"}
                  width={15}
                  height={15}
                  alt="logo"
                />
                <h4
                  style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                  className="text-[14px] text-gray-200"
                >
                  Outbounding
                </h4>
              </div>
              <Image
                src={"/icons/calender.png"}
                width={20}
                height={20}
                alt="logo"
              />
            </div>
            <div className="w-full pt-2">
              <div className="h-[3px] bg-gray-400 rounded-md"></div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
