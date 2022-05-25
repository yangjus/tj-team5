import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import db from './firebase.js';
import { getFirestore, collection, getDocs, doc, getDoc, setDoc, addDoc  } from "firebase/firestore";

const Navbar = () => {
    let navigate = useNavigate();
    const {state} = useLocation();
    const { username } = state;
    console.log(username)

    function homeOnClick(){
      navigate("/home", { state: {username: username}})
    }

    function studentOnClick(){
      navigate("/student-directory", { state: {username: username}})
    }

    function teacherOnClick(){
      navigate("/teacher-directory", { state: {username: username}})
    }

    function calendarOnClick(){
      navigate("/calendar", { state: {username: username}})
    }

    function logoutOnClick(){
      getDocs(collection(db, "staff"))
      .then((allDocs) => {allDocs.forEach((d) => ((String(username) == String(d.data().username))
        ?(setDoc(doc(db, "staff", "teacher1"), {
            isLogged: false,
            isAdmin: d.data().isAdmin,
            name: d.data().name,
            password: d.data().password,
            username: d.data().username
          }), navigate("/", { state: {username: d.data().username }}))
        : console.log()))})
    }

    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white'
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        TJ Admin Portal
                    </Typography>
                        <Button color="inherit" onClick={homeOnClick}>Home</Button>
                        <Button color="inherit" onClick={studentOnClick}>Student Directory</Button>
                        <Button color="inherit" onClick={teacherOnClick}>Teacher Directory</Button>
                        <Button color="inherit" onClick={calendarOnClick}>Calendar</Button>
                        <Button color="inherit" onClick={logoutOnClick}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default Navbar;
