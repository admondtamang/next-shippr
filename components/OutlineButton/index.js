import React from "react";
import ToolTipWithButton from "../ToolTipWithButton";

export default function OutlineButton({ label, no_spacing }) {
  return (
    <ToolTipWithButton title={label}>
      <div
        className={`flex-center rounded border-2 p-1 ${
          no_spacing ? "" : "ml-2 pl-3 "
        }`}
      >
        <span className="uppercase text-sm font-semibold">{label}</span>
        <box-icon name="chevron-down"></box-icon>
      </div>
    </ToolTipWithButton>
  );
}
