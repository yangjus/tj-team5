import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar.js';
import {List, IconButton, Grid} from '@mui/material';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import db from '../firebase.js'
<<<<<<< HEAD
import {collection, doc, getDocs, updateDoc, deleteDoc} from "firebase/firestore";
=======
import {collection, getDocs} from "firebase/firestore";
>>>>>>> ae73b174d9f1738e97f4fbabdb1bb02d8824b229
import { useLocation } from "react-router-dom";
import EditStudent from './EditStudent.js';

const StudentDirectory = () => {

    const {state} = useLocation();
    const { username } = state; /*the user */

    const [students, setStudents] = useState([])

    const printStudents = async () => {
        const documents = await getDocs(collection(db, "students"));
        console.log(documents);
        let list = [];
        documents.forEach((student) => list.push({id: student.id, ...student.data()}));
        setStudents(list);
    }

    useEffect(() => {
        printStudents();
    }, []);

    const commonStyles = {
        bgcolor: '#ADD8E6',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '80vh',
    };

    console.log(students)

    return (
        <>
        <Navbar />
        <h1>Student Directory</h1>
        <Grid container direction="row" alignItems="center" justifyContent="center">
            <p>Add Student: </p>
            <IconButton>
                <AddReactionIcon />
            </IconButton>
        </Grid>
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" style={{ minHeight: '10vh' }}>
            <List sx={{ ...commonStyles, borderRadius: '4px'}} component="nav" aria-label="mailbox folders">
                {
                    students.map((student) => {
                        console.log(student)
<<<<<<< HEAD
                        return (<EditStudent studentId={student.id} firstname={student.firstname} lastname={student.lastname} />)
=======
                        return (<EditStudent studentId={student.id} firstname={student.firstname} 
                            lastname={student.lastname} birthday={student.birthday} grade={student.grade}/>)
>>>>>>> ae73b174d9f1738e97f4fbabdb1bb02d8824b229
                    })
                }
            </List>
        </Grid>
        </>
    );
}

export default StudentDirectory;