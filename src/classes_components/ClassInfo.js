import { React, useState, useRef } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid} from '@mui/material';
import {ListItem, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {doc, updateDoc, deleteDoc, getDocs, collection} from "firebase/firestore";
import db from "../firebase.js";

const ClassInfo = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [students, setStudents] = useState([]);

  function ClassesOpen(e){
      e.preventDefault();
      setIsOpen(!isOpen);
  };

  const hoverStyle = {
    bgcolor: '#ADD8E6',
    '&:hover $child': {
        color: 'blue'
    }
  };

  const showStudents = async () => {
    const documents = await getDocs(collection(db, "students"));
    let list = [];
    documents.forEach((student) => list.push({id: student.id, ...student.data()}));
    setStudents(list)
    
    //for (let i = 0; i<students.length; i++){
     // const docs = await getDocs(db.collection('students').doc(students[i]).collection('grades'))
    //  console.log(docs)
    //}
    const sRef = db.collection('students').doc('student 1');
    //const collections = await sRef.listCollections();
    //collections.forEach(collection => {
    //console.log('Found subcollection with id:', collection.id);
    //});
  }

  return(
    <>
      <div key={props.memberId}>
      <ListItem style={{ hoverStyle }}>
          <ListItemText primary={<p>{props.name}</p>} fontSize="1em"/>
          <ListItemIcon>
              <IconButton onClick={e => ClassesOpen(e)} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                  <InfoIcon />
              </IconButton>
          </ListItemIcon>
      </ListItem>
      <Divider light/>
      </div>

      <Dialog open={isOpen}>
            <Grid item marginTop={2} marginLeft={28}>
              <ClearIcon onClick={ClassesOpen}></ClearIcon>
            </Grid>
            <DialogTitle>Math 101</DialogTitle>
            <DialogContent>
                <Grid item marginTop={2}>
                  <div className='editclassbtn'><Button variant="contained" justifycontent= "center" onClick={showStudents()}>Edit Class information</Button></div>
                </Grid>
            </DialogContent>
        </Dialog>
    </>
  )
}

export default ClassInfo;