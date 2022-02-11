import React from "react";
import ToolTipWithButton from "../ToolTipWithButton";

export default function OutlineButton({ label }) {
    return (
        <ToolTipWithButton title={label}>
            <div className="flex-center rounded border-2 p-1 pl-3 ml-2">
                <span className="uppercase text-sm font-semibold">{label}</span>
                <box-icon name="chevron-down"></box-icon>
            </div>
        </ToolTipWithButton>
    );
}
