import React from "react";
import { clsx } from "clsx";
import { variants } from "@/lib/data";

type ButtonPropsType = {
  name: string;
  onPress?: () => void;
  icon?: JSX.Element;
  variant?: (typeof variants)[number];
  className?: string;
};

export const AppButton = ({
  name,
  onPress,
  icon,
  variant,
  className,
}: ButtonPropsType) => {
  if (variant === "outline") {
    return (
      <button
        className={clsx(
          `py-2 px-5 cursor-pointer border rounded-[10px] border-brand01 text-brand01 disabled:bg-opacity-50`,
          className
        )}
        onClick={onPress}
      >
        {icon}
        {name}
      </button>
    );
  }

  return (
    <button
      className={clsx(
        `py-3 2xl:px-6 xl:px-5 lg:px-3 px-5 cursor-pointer flex border md:min-w-[132px] rounded-[10px] justify-center items-center border-brand01 bg-brand01 text-white disabled:border-opacity-10 disabled:bg-opacity-50 disabled:cursor-not-allowed`,
        className
      )}
      onClick={onPress}
    >
      <span className="flex items-center 2xl:gap-x-2.5 xl:gap-x-1 gap-x-2 justify-center">
        {icon}
        {name}
      </span>
    </button>
  );
};
