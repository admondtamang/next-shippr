import React from "react";
import ToolTipWithButton from "../ToolTipWithButton";

export default function OutlineButton({
  label,
  onClick,
  no_spacing,
  icon,
  isOpen,
  className,
  ...rest
}) {
  return (
    <ToolTipWithButton onClick={onClick} title={label}>
      <div
        className={`flex-center rounded border-2 p-1 ${
          no_spacing ? "" : "ml-2 pl-3 "
        } ${className}`}
        {...rest}
      >
        <span className="uppercase text-sm font-semibold">{label}</span>
        <box-icon
          name={icon ?? (isOpen ? "chevron-up" : "chevron-down")}
        ></box-icon>
      </div>
    </ToolTipWithButton>
  );
}
