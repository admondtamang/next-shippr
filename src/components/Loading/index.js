import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Loading() {
  return (
    <Box className="flex-center h-full">
      {/* <Image src={logo} placeholder="blurDataURL" alt="logo" height={180} width={220} className="object-contain " /> */}

      <CircularProgress />
    </Box>
  );
}
