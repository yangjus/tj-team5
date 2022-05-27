import { React, useState, useRef } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Grid, Typography} from '@mui/material';
import {ListItem, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import InfoIcon from '@mui/icons-material/Info';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {doc, updateDoc, deleteDoc, getDocs, collection} from "firebase/firestore";
import db from "../firebase.js";

const ClassInfo = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const [studentList, setStudentList] = useState([]);
  const [teacher, setTeacher] = useState("");
  const [student, setStudent] = useState()

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
    console.log("running!")
    const documents = await getDocs(collection(db, "grades"));
    let list = [];
    documents.forEach((classes) => list.push({id: classes.id, ...classes.data()}));
    for (let i = 0; i < list.length; i++){
      if (props.name == list[i].id){
        setTeacher(list[i].teacher)
      }
    }
    let keyList = []
    for (let i = 0; i < list.length; i++){
      if (props.name == list[i].id){
        Object.keys(list[i]).map(function(key, index) {
          if(key != "teacher" && key != "id"){
            keyList.push(key)
          }
        });
      }   
    }
    setStudentList(keyList)
    console.log(teacher)
    setStudentList(list)
    console.log(student)
    console.log(list)
    console.log(keyList)
  }

  return(
    <>
      <div key={props.memberId}>
      <ListItem style={{ hoverStyle }}>
          <ListItemText primary={<p>{props.name}</p>} fontSize="1em"/>
          <ListItemIcon>
              <IconButton onClick={e => {ClassesOpen(e); showStudents()}} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
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
            <Typography>Teacher: {teacher}</Typography>
            <Typography>List of Students: </Typography>
            {Object.entries(studentList).map(([key, value]) => (
              {value}
              ))}
            <DialogContent>
                {/*<Grid item marginTop={2}>
                  <div className='editclassbtn'><Button variant="contained" justifycontent= "center" onClick={showStudents}>Edit Class information</Button></div>
                </Grid>*/}
            </DialogContent>
        </Dialog>
    </>
  )
}

export default ClassInfo;