import {IconButton, Grid} from '@mui/material';
import db from '../firebase.js'
import {doc, deleteDoc} from "firebase/firestore";
import { useNavigate, useLocation } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

function Event(props) {
  let navigate = useNavigate()
  const {state} = useLocation();
  const { username } = state || {};

  async function deleteEvent(){
    await deleteDoc(doc(db, "events", props.data.title));
    console.log(props.data.title)
    navigate("/calendar", { state: {username: username}})
  }

  console.log(props.data)
  return (
    <div className="Event">
      <Grid container direction="row" alignItems="center" justifyContent="center">
        <p><b>Name:</b> {props.data.title} | <b>Date:</b> {props.data.date} </p>
        <IconButton onClick={deleteEvent} variant="contained">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </div>
  );
}

export default Event;
