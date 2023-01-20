import React from "react";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
import { Element } from 'lord-icon-element/element';
import { clickOnMorph } from "./events/clickOnMorph";

// Lord-Icon setup

// custom trigger for animation
Element.defineTrigger('clickOnMorph', clickOnMorph);

// register lottie and define custom element
defineElement(lottie.loadAnimation);

declare module "react" {
  interface HTMLAttributes<T> {
    target?: any;
  }
}

export type LordIconTrigger =
  | "hover"
  | "click"
  | "loop"
  | "loop-on-hover"
  | "morph"
  | "morph-two-way"
  | "clickOnMorph";

export type LordIconColors = {
  primary?: string;
  secondary?: string;
};

export type LordIconProps = {
  src?: string;
  trigger?: LordIconTrigger;
  colors?: LordIconColors;
  delay?: number;
  size?: number;
};

export const LordIcon = ({
  colors,
  src,
  size,
  trigger,
  delay,
}: LordIconProps) => {
  return (
    <lord-icon
      target=".icon"
      colors={`primary:${colors?.primary},secondary:${colors?.secondary}`}
      src={src}
      trigger={trigger}
      delay={delay}
      style={{
        width: size,
        height: size,
        cursor: "pointer"
      }}
    />
  );
};
