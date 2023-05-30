import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Popover, TextField } from "@mui/material";
import { cyan } from "@mui/material/colors";

const Apple = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const Navigate = useNavigate();
  const onHomePageButtonClick = () => {
    console.log("Button clicked");
    console.log("Name : ", name);
    console.log("Email : ", email);
    Navigate("/");
  };

  const handleClick = (event) => {
    console.log(123);
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handlePopoverContentClick = () => {
    Navigate("/");
    handleClose();
  };
  return (
    <div style={{ padding: 5 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            columnGap: 5,
          }}
          onClick={handleClick}
        >
          <Avatar sx={{ bgcolor: cyan[500] }}>VP</Avatar>
          <span>Vraj Parekh</span>
        </div>
      </div>
      <div
        style={{
          padding: 5,
          display: "flex",
          flexDirection: "column",
          rowGap: 10,
        }}
      >
        <TextField
          variant="outlined"
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={onHomePageButtonClick} variant="contained">
          SUBMIT
        </Button>
      </div>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div onClick={handlePopoverContentClick}>Logout</div>
      </Popover>
    </div>
  );
};

export default Apple;