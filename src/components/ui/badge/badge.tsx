import { FC } from "react";
import { BadgeProps } from "./badge.types";

export const Badge: FC<BadgeProps> = ({ children, className, ...props }) => (
  <span className={`badge ${className}`} {...props}>
    {children}
  </span>
);
