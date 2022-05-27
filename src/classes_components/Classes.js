import React from 'react';
import Navbar from '../Navbar.js';
import { useLocation } from "react-router-dom";
import { Button, Grid, Dialog, DialogTitle,DialogContent } from '@mui/material';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import db from '../firebase'
import { collection,getDocs } from 'firebase/firestore';
const Classes = () => {
    const {state} = useLocation();
    const { username } = state;
    const[Classes,setClasses] = useState([])
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
        let list = [];
        documents.forEach((classes) => list.push({id: classes.id, ...classes.data()}));
        setStudents(list);
        
    
    }

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
