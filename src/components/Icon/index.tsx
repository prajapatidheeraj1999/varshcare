import { FC, SVGAttributes } from "react";
import Circle from "./Circal";
import FiveStarRating from "./FiveStarRating";
import ModernMachine from "./ModernMachin";
import Open24 from "./Open24";
import PocketFriendly from "./PocketFriendly";
import Report12 from "./Report12";
import User from "./User";
import FiveStartBlue from "./FiveStartBlue";
import ModernMachineBlue from "./ModernMachineBlue";
import Open24Blue from "./Open24Blue";
import PocketFriendlyBlue from "./PocketFriendlyBlue";
import Report12Blue from "./Report12Blue";
import UserBlue from "./UserBlue";

export type IconsList = keyof typeof icons;



export interface IconProps {
    icon: IconsList;
    size?: number;
    fill2?: string;
    stroke?: string;
  }
  
  export type IconElement = FC<IconProps & SVGAttributes<SVGElement>>;
  
  const Icon: IconElement = ({ icon, ...props }) => {
    const I = icons[icon];
  
    return <I  {...props} />;
  };

  export const icons={
    circle:Circle,
    fiveStar:FiveStarRating,
    modernMachine:ModernMachine,
    open24:Open24,
    pocketFriendly:PocketFriendly,
    report12:Report12,
    user:User,
    fiveStarBlue:FiveStartBlue,
    modernMachineBlue:ModernMachineBlue,
    open24Blue:Open24Blue,
    pocketFriendlyBlue:PocketFriendlyBlue,
    report12Blue:Report12Blue,
    userBlue:UserBlue

  }

  export default Icon;