import React from "react";
import Navbar from "../Navbar.js";
import {Grid, Button} from '@mui/material';
import TJES from './images/TJES.JPG'
import { Link } from "react-router-dom";

const Home = (props) => {

    const btnSize = {
        maxWidth: "300px",
        maxHeight: "250px",
        minWidth: "300px",
        minHeight: "250px",
    };

    const photoSize = {
        height: "200px",
        width: "600px",
    }

    return (
        <>
            <Navbar/>
            <h1>Home Portal</h1>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Link to="/student-directory">
                        <Button variant='contained' fontSize="30" style={btnSize}>Student Directory</Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/teacher-directory">
                        <Button variant='contained' fontSize="30" style={btnSize}>Teacher Directory</Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/classes">
                        <Button variant='contained' fontSize="30" style={btnSize}>Classes</Button>
                    </Link>
                </Grid>
                <Grid item xs={3}>
                    <Link to="/calendar">
                        <Button variant='contained' fontSize="30" style={btnSize}>Calendar</Button>
                    </Link>
                </Grid>
            </Grid>
            <br></br>
            <Grid backgroundSize='contained'>
                <img src={TJES} style={photoSize}/>
            </Grid>
        </>
    );
};

export default Home;