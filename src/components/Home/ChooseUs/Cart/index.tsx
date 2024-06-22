import { IconElement } from "@/components/Icon";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React, { ReactNode, useState } from "react";

type ChooseUsCartProp = {
  svg: ReactNode;
  bSvg: ReactNode;
  heading: string;
  content: string;
};

const ChooseUsCart: React.FC<ChooseUsCartProp> = ({
  svg,
  heading,
  content,
  bSvg,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div  className={`flex flex-col gap-2 group lg:w-64  lg:h-64 w-72 h-72 justify-center items-center bg-white shadow-md rounded-lg py-6 px-6 border border-solid border-text-3 hover:bg-primary-900 hover:text-white transition-all duration-300 relative overflow-hidden ${isHovered ? 'hover-translate' : ''}`} 
    onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div  className={`transition-transform duration-300 delay-75 transform ${isHovered ? '-translate-y-3' : 'translate-y-0'}`}>
        {isHovered ? bSvg : svg}
        </div>
      <div className="font-bold text-md">{heading}</div>
      <div className="text-center text-sm text-text-5 group-hover:text-white">
        {content}
      </div>
    </div>
  );
};

export default ChooseUsCart;
