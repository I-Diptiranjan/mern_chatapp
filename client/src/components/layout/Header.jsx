import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { orange } from "../../constant/color";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          height: "4rem",
        }}>
        <AppBar
          position="static"
          sx={{
            background:
              " linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(20,149,137,1) 0%, rgba(155,153,19,1) 100%, rgba(34,5,65,1) 100%)",
          }}>
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}>
              Chattu
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
