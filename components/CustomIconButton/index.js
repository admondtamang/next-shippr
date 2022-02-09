import React from "react";
import { IconButton, Tooltip } from "@mui/material";

export default function CustomIconButton({ name, tooltip, ...rest }) {
    return (
        <Tooltip title={tooltip || ""}>
            <IconButton>
                <div className="flex-center circular-button">
                    <box-icon name={name} {...rest} />
                </div>
            </IconButton>
        </Tooltip>
    );
}
