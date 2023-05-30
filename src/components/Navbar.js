import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/tatvasoft_logo.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Container, Stack, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  return (
    <Container maxWidth="xl">
      <Stack
        direction={["column", "row"]}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={2}
      >
        <Stack direction={"row"} justifyContent={"flex-start"}>
          <Link to="/">
            <img src={logo} alt="App logo" height={45} />
          </Link>
        </Stack>
        <Stack
          direction={"row"}
          alignItems={"center"}
          spacing={2}
          padding={[2, 0]}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography variant="body1" color="primary">
              Login
            </Typography>
          </Link>
          <Typography variant="body1" color="primary">
            |
          </Typography>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <Typography variant="body1" color="primary">
              Register
            </Typography>
          </Link>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Link
              to="/cart"
              style={{
                border: "1px solid #E4E4E4",
                padding: 5,
                textDecoration: "none",
                color: "#f14d54",
                borderRadius: 5,
              }}
            >
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                spacing={1}
              >
                <ShoppingCartIcon color="primary" />0
                <Typography variant="body1" color={"black"}>
                  Cart
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={3}
        style={{ height: 65, backgroundColor: "#F4F4F4" }}
      >
        <input
          type="text"
          placeholder="   What are you looking for..."
          style={{
            fontFamily: "Helvetica",
            fontStyle:'italic',
            width: 400,
            height: 35,
            border: "1px solid #E4E4E4",
            fontSize: 16,
          }}
        />
        <Button
          variant="contained"
          disableElevation
          color="secondary"
          startIcon={<SearchIcon />}
          style={{ color: "white" }}
        >
          Search
        </Button>
      </Stack>
    </Container>
  );
};

export default Navbar;