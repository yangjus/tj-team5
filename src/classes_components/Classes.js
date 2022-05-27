import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar.js';
import {List, IconButton, Grid} from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
import {collection, getDocs} from "firebase/firestore";
import { useLocation } from "react-router-dom";
<<<<<<< HEAD
import {Button} from '@mui/material';
import {collection, getDocs, setDoc, doc } from "firebase/firestore";
import db from '../firebase.js'
=======
import ClassInfo from './ClassInfo.js'
>>>>>>> b72fc31df5ad466618287616c0bd2a84735d3b28

async function showRecords(){
  const documents = await getDocs(collection(db, "students"));
  let list = [];
  documents.forEach((student) => list.push({id: student.id, ...student.data()}));
  console.log(list);
}

const Classes = () => {
    const {state} = useLocation();
    const { username } = state;

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
<<<<<<< HEAD
            <Navbar />
            <Button variant="contained" onClick={showRecords}>Show Records</Button>
            <h1>This is the Classes page</h1>
=======
        <Navbar />
        <h1>Class Directory</h1>
        {/*<Grid container direction="row" alignItems="center" justifyContent="center">
            <p>Add Class: </p>
            <IconButton>
                <AddReactionIcon />
            </IconButton>
    </Grid>*/}
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
            <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                {
                    classes.map((member) => {
                        console.log(member)
                        return (<ClassInfo memberId={member.id} name={member.name}/>)
                    })
                }
            </List>
        </Grid>
>>>>>>> b72fc31df5ad466618287616c0bd2a84735d3b28
        </>
    );
}

export default Classes;
