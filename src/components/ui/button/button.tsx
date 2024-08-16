import { FC } from "react";
import { ButtonProps } from "./button.types";

export const Button: FC<ButtonProps> = ({
  variant = "solid",
  className,
  isDisabled,
  ...props
}) => {
  const variantClass =
    variant === "outline"
      ? "bg-transparent text-black border border-solid"
      : "bg-black text-white";
  const disabledClass = isDisabled ? "opacity-50 cursor-not-allowed" : "";
  return (
    <button
      className={`${variantClass} ${disabledClass} ${className} py-1 px-2 rounded`}
      {...props}
    />
  );
};
