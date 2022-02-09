import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export default function ToolTipWithButton({ children, title }) {
    return (
        <Tooltip title={title || ""}>
            <IconButton>{children}</IconButton>
        </Tooltip>
    );
}
