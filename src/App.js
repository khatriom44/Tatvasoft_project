import "./styles/App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const theme = createTheme({
  palette: {
    primary: {
      main: "#f14d54",
    },
    secondary: {
      main: "#06D043",
    },
    customColor: {
      main: "#F4F4F4",
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer />
      </ThemeProvider>
    </>
  );
}

export default App;