import React from "react";
import { LordIcon, LordIconProps } from "../lordicon";

// This function is seperately created for CSR (Others methods not working)
const CustomLordIcon = ({src, trigger, colors, size, delay}:LordIconProps) => {
  return (
    <LordIcon
      src={src}
      trigger={trigger}
      colors={colors}
      size={size}
      delay={delay}
    />
  );
};

export default CustomLordIcon;
