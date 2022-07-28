import React, { Suspense } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import "./Loading.css"

function Loading() {
  return (
    <Box sx={{ width: 300 }} className="loading">
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export default Loading;
