import { Button, Container, Stack, Typography,InputAdornment, TextField, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuItem } from '@mui/material';
import { Select } from '@mui/material';
import { toast } from "react-toastify";
import YupPassword from 'yup-password';
import { useState, useEffect } from "react";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
YupPassword(Yup);
// export const Register = () => {
//     return(<form>
//         <TextField label="name"/>
//     </form>)
// }
export const Register = () => {
    const Navigate = useNavigate();
    const [user, setUser] = useState([])

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    useEffect(() => {
        axios.get("https://book-e-sell-node-api.vercel.app/api/user").then((res) => {
            // console.log("Details", res.data);
            setUser(res.data)
        })
    }, [])

    
    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        role: "",
        password: "",
        confirmpassword: ""
    }
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().min(3, "Firstname should atleast contain 3 characters").required('FirstName is Required'),
        lastname: Yup.string().min(3, "Lastname should atleast contain 3 characters").required('LastName is Required'),
        email: Yup.string().email("Please enter a valid email").required('Email is Required'),
        password: Yup.string().min(5,"Password must contain 5 character").required('Password is Required'),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'), null],"Password must be same").required('ConfirmPassword is Required'),
    })


    const onFormSubmit = async (values) => {
        const getData = {
            "firstName": values.firstName,
            "lastName": values.lastName,
            "email": values.email,
            "password": values.password,
            "confirmpassword":values.confirmpassword,
            "role": values.role
        }
        try {
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts", getData);
            if (res.status === 201) {
                console.log(res.data.id);
                toast.success('Data created Succesfully..!!');
                Navigate("/");
            }
        }
        catch (err) {
            console.log(err);
            toast("Error" + err);
        }
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
                    Register
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
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                rowGap: 10,
                            }}>
                                <div style={{
                                    fontSize: 40,
                                    fontWeight: "bolder",
                                    color: "#2E2E2E",
                                }}>
                                    Login or Create an Account
                                </div>
                                <div style={{
                                    width: 190,
                                    height: 0,
                                    border: 1,
                                    borderStyle: "solid",
                                    borderColor: "rgb(255,89,92)",
                                    marginBottom: 30
                                }}> </div>
                                <div style={{
                                    float: "left",
                                    marginLeft: '58px',
                                    marginRight: "auto",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "rgb(94,94,94)"
                                }}>Personal Information
                                    <div><span style={{
                                        fontSize: 14,
                                        color: "rgb(94,94,94)",
                                        fontWeight: "lighter",
                                        marginTop: 50
                                    }}>Please enter the following Information to create account</span></div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    columnGap: 40,
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: 5
                                    }}>
                                        First Name*
                                        <TextField
                                            // id="outlined-basic" 
                                            name="firstname"
                                            // label="First Name" 
                                            variant="outlined"
                                            value={values.firstname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{
                                                width: 500,
                                            }}
                                        />
                                        <span style={{
                                            color: "red",
                                            fontSize: 13

                                        }}
                                        >
                                            {touched.firstname && errors.firstname}
                                        </span>
                                    </div>

                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: 5
                                    }}>
                                        Last Name*
                                        <TextField
                                            // id="outlined-basic" 
                                            name="lastname"

                                            // label="Last Name" 
                                            variant="outlined"
                                            value={values.lastname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{
                                                width: 500,
                                            }}
                                        />
                                        <span style={{
                                            color: "red",
                                            fontSize: 13

                                        }}
                                        >
                                            {touched.lastname && errors.lastname}
                                        </span>
                                    </div>
                                </div>
                                <div style={{
                                    display: "flex",
                                    columnGap: 40
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: 5
                                    }}>
                                        Email*
                                        <TextField
                                            // id="outlined-basic" 
                                            name="email"
                                            // label="Email" 
                                            variant="outlined"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{
                                                width: 500,
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

                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: 5
                                    }}>
                                        Role*
                                        <Select
                                            // labelId="demo-simple-select-label"
                                            // id="demo-simple-select"
                                            name="role"
                                            value={values.role}
                                            // label="Role"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            size="small"
                                            style={{
                                                width: 500,
                                            }}
                                        >
                                            <MenuItem value={"Seller"}>Seller</MenuItem>
                                            <MenuItem value={"Buyer"}>Buyer</MenuItem>
                                        </Select>
                                    </div>
                                </div>
                                <div style={{
                                    float: "left",
                                    marginLeft: '58px',
                                    marginRight: "auto",
                                    fontSize: 20,
                                    fontWeight: "bold",
                                    color: "rgb(94,94,94)"
                                }}>Login Information
                                </div>
                                <div style={{
                                    display: "flex",
                                    columnGap: 40
                                }}>
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: 5
                                    }}>
                                        Password*
                                        <TextField
                                            type={showPassword ? "text" : "password"}
                                            // id="outlined-basic" 
                                            name="password"
                                            // label="Password" 
                                            variant="outlined"
                                            value={values.password}
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
                                            size="small"
                                            style={{
                                                width: 500,
                                            }}
                                        />
                                        <span style={{
                                            color: "red",
                                            fontSize: 13

                                        }}
                                        >
                                            {touched.password && errors.password}
                                        </span>
                                    </div>

                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        rowGap: 5
                                    }}>
                                        Confirm Password*
                                        <TextField
                                            type={showPassword ? "text" : "password"}
                                            // id="outlined-basic" 
                                            name="confirmpassword"
                                            // label="Confirm Password" 
                                            variant="outlined"
                                            value={values.confirmpassword}
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
                                            size="small"
                                            style={{
                                                width: 500,
                                            }}
                                        />
                                        <span style={{
                                            color: "red",
                                            fontSize: 13,
                                        }}
                                        >
                                            {touched.confirmpassword && errors.confirmpassword}
                                        </span>
                                    </div>
                                </div>
                                <div style={{
                                    alignContent: "center",
                                    textAlign: "center",
                                    width: "100%",
                                    height: "80px",
                                    marginTop: "40px"
                                }}>
                                    <Button variant="contained" type="submit"
                                        style={{
                                            marginRight: "auto",
                                            // marginLeft: 240,
                                            backgroundColor: "rgb(255,89,92)",
                                            borderRadius: 3,
                                            fontWeight: "bold",
                                            alignContent: "center",
                                        }}
                                    >Register</Button></div>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
        </Container>

    )
}

export default Register;