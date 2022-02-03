import React from "react";
import { IconButton } from "@mui/material";

export default function CustomIconButton({ name }) {
    return (
        <IconButton>
            <div className="flex-center circular-button">
                <box-icon name={name} />
            </div>
        </IconButton>
    );
}