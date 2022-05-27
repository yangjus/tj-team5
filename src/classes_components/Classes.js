import React from 'react';
import Navbar from '../Navbar.js';
import { useLocation } from "react-router-dom";
import {Button} from '@mui/material';
import {collection, getDocs, setDoc, doc } from "firebase/firestore";
import db from '../firebase.js'

async function showRecords(){
  const documents = await getDocs(collection(db, "students"));
  let list = [];
  documents.forEach((student) => list.push({id: student.id, ...student.data()}));
  console.log(list);
}

const Classes = () => {
    const {state} = useLocation();
    const { username } = state;

    return (
        <>
            <Navbar />
            <Button variant="contained" onClick={showRecords}>Show Records</Button>
            <h1>This is the Classes page</h1>
        </>
    );
}

export default Classes;
