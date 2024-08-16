import { HTMLProps } from "react";

export interface BadgeProps extends HTMLProps<HTMLSpanElement> {
    children: React.ReactNode;
  }