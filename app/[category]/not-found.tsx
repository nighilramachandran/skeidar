import React from "react";
import { Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
      textAlign="center"
    >
      <ErrorOutlineIcon sx={{ fontSize: 60, color: "gray" }} />
      <Typography variant="h5" color="text.danger" mt={2}>
        No such item found
      </Typography>
    </Box>
  );
};

export default NotFound;
