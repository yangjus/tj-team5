import { React, useState, useRef } from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import {ListItem, ListItemIcon, ListItemText, IconButton, Divider} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import {doc, updateDoc, deleteDoc} from "firebase/firestore";
import db from "../firebase.js";

const ClassInfo = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  function modalClick(e){
      e.preventDefault();
      setIsOpen(!isOpen);
  };

  const hoverStyle = {
    bgcolor: '#ADD8E6',
    '&:hover $child': {
        color: 'blue'
    }
  };

  return(
    <>
      <div key={props.memberId}>
      <ListItem style={{ hoverStyle }}>
          <ListItemText primary={<p>{props.name}</p>} fontSize="1em"/>
          <ListItemIcon>
              <IconButton onClick={e => modalClick(e)} edge="end" style={{ color: 'white', backgroundColor: 'green'}}>
                  <InfoIcon />
              </IconButton>
          </ListItemIcon>
      </ListItem>
      <Divider light/>
      </div>
    </>
  )
}

export default ClassInfo;