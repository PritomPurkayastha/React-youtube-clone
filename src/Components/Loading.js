// import React, { Suspense } from "react";
// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";
// import { Box } from "@mui/system";
// import "./Loading.css"
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Loading.css"

function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loading;
