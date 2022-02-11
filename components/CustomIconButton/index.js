import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import Icon from "../Icon";

export default function CustomIconButton({ name, tooltip, ...rest }) {
    return (
        <Tooltip title={tooltip || ""}>
            <IconButton>
                <div className="flex-center circular-button">
                    <Icon name={name} {...rest} />
                </div>
            </IconButton>
        </Tooltip>
    );
}
