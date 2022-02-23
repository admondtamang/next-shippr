import { IconButton, Tooltip } from "@mui/material";
import React from "react";

export default function ToolTipWithButton({ onClick, children, title }) {
  return (
    <Tooltip title={title || ""}>
      <IconButton onClick={onClick}>{children}</IconButton>
    </Tooltip>
  );
}
