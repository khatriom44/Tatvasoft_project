import { Button, Container, Stack, Typography, InputAdornment, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState([])

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const initialValues = {
    email: "",
    password: "",
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please Enter an Email Address'),
    password: Yup.string().oneOf([Yup.ref('password'), null], "Password Enter correct password").required('Please Enter the Password')
  })


  const onFormSubmit = async (values) => {
    const getData = {
      "email": values.email,
      "password": values.password
    }

    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", getData)
    if (res.status === 201) {
      console.log(res.data.id);
      toast.success('Login Succesfully..!!');
      Navigate("/book");
    }

    axios.delete("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
      if (res.status === 200) {
        console.log(res.data.id);
        toast.success('Data Deleted Succesfully..!!');
      }
    })
  }
  return (
    <Container>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={2}
        margin={4}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          <Typography variant="subtitle1">Home</Typography>
        </Link>
        <Typography variant="caption"> &gt; </Typography>

        <Typography variant="subtitle1" color="primary">
          Login
        </Typography>
      </Stack>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onFormSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                margin={4}
              >
                <Typography variant="h3" fontSize={40}>
                  Login or Create an Account
                </Typography>
              </Stack>

              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                marginBottom={5}
              >
                <Stack
                  direction={"column"}
                  width={"45%"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography variant="body2" fontSize={20}>
                      New Customer
                      <hr />
                    </Typography>

                    <Typography variant="h4" fontSize={14} marginTop={2}>
                      Registration is free and easy.
                    </Typography>

                    <ul>
                      <li>
                        <Typography variant="h6" fontSize={14}>
                          Faster checkout
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="h6" fontSize={14}>
                          Save multiple shipping addresses
                        </Typography>
                      </li>
                      <li>
                        <Typography variant="h6" fontSize={14}>
                          View and track orders and more
                        </Typography>
                      </li>
                    </ul>
                  </Stack>

                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: "220px", height: "45px" }}
                  >
                    Create an Account
                  </Button>
                </Stack>

                <Stack
                  direction={"column"}
                  width={"45%"}
                  justifyContent={"space-between"}
                >
                  <Stack>
                    <Typography variant="body2" fontSize={20}>
                      Registered Customers
                      <hr />
                    </Typography>

                    <Typography variant="h4" fontSize={14} marginTop={2}>
                      If you have an account with us, please log in.
                    </Typography>

                    <Typography variant="body1" marginTop={2} marginBottom={1}>
                      Email Address *
                    </Typography>
                    <div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        style={{
                          width: 400,
                          height: 35,
                          border: "1px solid #E4E4E4",
                          fontSize: 18,
                          padding: "0 15px",
                        }}
                      />
                      <span style={{
                        color: "red",
                        fontSize: 13

                      }}
                      >
                        {touched.email && errors.email}
                      </span>
                    </div>
                    <Typography variant="body1" marginTop={2} marginBottom={1}>
                      Password *
                    </Typography>
                    <div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name='Password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                            </InputAdornment>
                          )
                        }}
                        style={{
                          width: 400,
                          height: 35,
                          border: "1px solid #E4E4E4",
                          fontSize: 18,
                          padding: "0 15px",
                        }}
                      /> <span style={{
                        color: "red",
                        fontSize: 13

                      }}
                      >
                        {touched.password && errors.password}
                      </span>
                    </div>
                  </Stack>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{ width: "220px", height: "45px", marginTop: "20px" }}
                  >
                    Login
                  </Button>
                </Stack>
              </Stack>
            </form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default Login;