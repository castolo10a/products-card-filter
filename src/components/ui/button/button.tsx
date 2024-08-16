import { FC } from "react";
import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({
  variant = "solid",
  className,
  ...props
}) => {
  const variantClass = variant === "outline" ? "bg-transparent text-black border border-solid" : "bg-black text-white";
  return <button className={`${variantClass} ${className} py-1 px-2 rounded`} {...props} />;
};
