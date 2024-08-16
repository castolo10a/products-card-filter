import { FC } from "react";
import { LabelProps } from "./label.types";

export const Label: FC<LabelProps> = ({ children, className, ...props }) => (
  <label className={`label ${className}`} {...props}>
    {children}
  </label>
);
