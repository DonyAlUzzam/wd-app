import { Component, ButtonHTMLAttributes } from "react";
import cx from "classnames";

interface ButtonProps {
  label: string | undefined;
  variant: "primary" | "secondary" | "info" | "danger" | "success" | "warning" | "line" | "link";
  size: "sm" | "md" | "lg";
  block?: boolean;
  icon?: string;
  ComponentIcon?: typeof Component;
  className?: string;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}

export default function Button(props: ButtonProps) {
  const { label, variant, size, block = false, icon, ComponentIcon, className, buttonProps } = props;

  const btnclass = cx(
    "flex items-center justify-center px-8 font-medium rounded-full transition duration-500",
    "focus:outline-none",
    className,
    {
      "w-full": block,
      "h-8 text-sm": size === "sm",
      "h-10 text-base": size === "md",
      "h-14 text-xl": size === "lg",
      "text-white": variant !== "primary" && variant !== "line" && variant !== "link",
      "focus:ring-2 focus:ring-opacity-50": variant !== "line" && variant !== "link",
      "bg-gray-100 hover:bg-gray-200 focus:ring-gray-200": variant === "primary",
      "bg-red-500 hover:bg-red-600 focus:ring-red-600": variant === "danger",
      "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-600": variant === "warning",
      "bg-blue-500 hover:bg-blue-600 focus:ring-blue-600": variant === "info",
      "bg-green-500 hover:bg-green-600 focus:ring-green-600": variant === "success",
      "ring-1 ring-[#693544] hover:bg-[#693544] hover:text-white": variant === "line",
      "hover:text-[#a3586e]": variant === "link",
    },
  );

  const RenderIcon = () => {
    if (icon) {
      return <i className={`${icon} ${label !== "" ? "mr-2" : null}`} />;
    }

    if (ComponentIcon) {
      return <ComponentIcon className={`${label !== "" ? "mr-2" : null}`} />;
    }

    return null;
  };

  return (
    <button className={btnclass} {...buttonProps}>
      <RenderIcon />

      <span>{label}</span>
    </button>
  );
}

Button.defaultProps = {
  block: false,
  icon: undefined,
  ComponentIcon: undefined,
  className: undefined,
  buttonProps: undefined,
};
