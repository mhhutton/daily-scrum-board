import React, { useState } from 'react';
import {
  Button, TextField, Dialog,
  DialogActions, DialogContent, DialogContentText,
  DialogTitle, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel,
  Select, MenuItem, InputLabel, Typography, Container
} from '@material-ui/core';

function AddActivity({ todoList, setTodoList, setDoingList, doingList, doneList, setDoneList }) {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');
  const [category, setCategory] = useState('');

  const handleDialogOpen = () => {
    setOpen(true);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };
  const handleAddActivity = () => {
    setOpen(false);
    if (category === 'todoList') {
      setTodoList([...todoList, msg]);
    } else if (category === 'doingList') {
      setDoingList([...doingList, msg]);
    } else if (category === 'doneList') {
      setDoneList([...doneList, msg]);
    }
  };

  return (
    <div className="add-activity">
      <Button
        variant="outlined"
        onClick={handleDialogOpen}
      >
        Add New Activity
      </Button>
      <Dialog className="add-activity-dialog" open={open} onClose={handleDialogClose}>
        <DialogContentText> PLEASE FILL IN ALL REQUIRED FIELDS </DialogContentText>
        <TextField
          // className={classes.modalBox}
          autoFocus
          margin="dense"
          id="name"
          label="Activity"
          placeholder="Enter Activity Description"
          type="text"
          // fullWidth
          multiline
          rows={4}
          variant="filled"
          onChange={(event) => setMsg(event.target.value)}
          // error={nameError}
          // required={true}
        />
        <RadioGroup>
          <FormControlLabel
            value="todoList"
            control={<Radio />}
            label="To Do"
            onChange={(event) => setCategory(event.target.value)}
          />
          <FormControlLabel
            value="doingList"
            control={<Radio />}
            label="Doing"
            onChange={(event) => setCategory(event.target.value)}
          />
          <FormControlLabel
            value="doneList"
            control={<Radio />}
            label="Done"
            onChange={(event) => setCategory(event.target.value)}
          />
        </RadioGroup>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddActivity} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddActivity;
