import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar.js';
import {List, IconButton} from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
import {collection, getDocs} from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { Button, Grid, Dialog, DialogTitle,DialogContent } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
const Classes = () => {
    const {state} = useLocation();
    const { username } = state;
    const[ClassesOpen,setClassesOpen] = useState(false)

    const btnSize = {
        maxWidth: "40vh",
        maxHeight: "45vh",
        minWidth: "40vh",
        minHeight: "45vh",
    };
    const classOnClick=()=> {
        setClassesOpen(true)
    }
    const classClose=()=>{
        setClassesOpen(false)
    }

    const showStudents = async () => {
        const classes = await getDocs(collection(db, "classes"));
        console.log(classes)
        
        
    
    }

    const [classes, setClasses] = useState([])

    const printClass = async () => {
        const documents = await getDocs(collection(db, "classes"));
        let list = [];
        documents.forEach((member) => list.push({id: member.id, ...member.data()}));
        setClasses(list);
    }

    useEffect(() => {
        printClass();
    }, []);

    const commonStyles = {
        bgcolor: '#ADD8E6',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '80vh',
    };


    return (
        <>
            <Navbar />
            <Grid item xs={3}>
                          <Button onClick={classOnClick} variant='contained' fontSize="30" style={btnSize}>Math101</Button>
                  </Grid>
                  <Dialog open={ClassesOpen}>
            <Grid item marginTop={2} marginLeft={28}>
              <ClearIcon onClick={classClose}></ClearIcon>
            </Grid>
            <DialogTitle>Math 101</DialogTitle>
            <DialogContent>
            {Object.entries(Classes).map(([key, value]) => (
              <div key={key}>
                <p><b>Name:</b> {value.name} </p>
              </div>
            ))}
                <Grid item marginTop={2}>
                  <div className='editclassbtn'><Button variant="contained" justifycontent= "center" onClick={showStudents()}>Edit Class information</Button></div>
                </Grid>
            </DialogContent>
        </Dialog>
        </>
    );
}

export default Classes;
