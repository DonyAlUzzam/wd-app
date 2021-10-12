import { Component, InputHTMLAttributes } from "react";
import cx from "classnames";

interface InputProps {
  type?: "text" | "email" | "password" | "number";
  id: string;
  label: string;
  block?: boolean;
  direction?: "row" | "column";
  variant: "primary" | "secondary" | "info" | "danger" | "success" | "warning";
  className?: string;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export default function Input(props: InputProps) {
  const { type, id, label, block, direction, variant, className, inputProps } = props;

  const inputclass = cx(
    "h-12 px-5 rounded-md outline-none bg-gray-100 bg-opacity-5 shadow-xl focus:border-2",
    className,
    {
      "w-full": block,
      "focus:border-blue-400": variant === "info",
      "focus:border-red-400": variant === "danger",
      "focus:border-green-400": variant === "success",
      "focus:border-yellow-400": variant === "warning",
    },
  );

  const gapclass = cx({
    "h-2": direction === "column",
    "w-2": direction === "row",
  });

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <div className={gapclass} />

      <input type={type} id={id} className={inputclass} {...inputProps} autoComplete="" />
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  block: false,
  direction: "column",
  className: undefined,
  inputProps: undefined,
};
