import { FC } from "react";
import { CheckboxProps } from "./checkbox.types";

export const Checkbox: FC<CheckboxProps> = ({ checked, onCheckedChange }) => (
  <input
    type="checkbox"
    checked={checked}
    onChange={() => onCheckedChange(!checked)}
    className="checkbox"
  />
);
