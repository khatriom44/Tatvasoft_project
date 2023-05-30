import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../assets/tatvasoft_logo.png";

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: 150, backgroundColor: "#F4F4F4" }}
        spacing={1}
      >
        <img src={logo} alt="LOGO" height={45} />
        <Typography variant="body2" color={"#929292"}>
        </Typography>
      </Stack>
    </Container>
  );
};

export default Footer;