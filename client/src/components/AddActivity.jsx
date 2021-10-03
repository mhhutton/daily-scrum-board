import React, { useState } from 'react';
import {
  Button, TextField, Dialog,
  DialogActions, DialogContent, DialogContentText,
  DialogTitle, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel,
  Select, MenuItem, InputLabel, Typography, Container
} from '@material-ui/core';

function AddActivity() {
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
  };

  return (
    <div className="add-activity">
      <Button
        variant="outlined"
        onClick={handleDialogOpen}
      >
        Add New Activity
      </Button>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogContentText> PLEASE FILL IN ALL REQUIRED FIELDS </DialogContentText>
        <TextField
          // className={classes.modalBox}
          autoFocus
          margin="dense"
          id="name"
          label="Activity"
          placeholder="Enter Activity Description"
          type="text"
          fullWidth
          onChange={(event) => setMsg(event.target.value)}
          // error={nameError}
          // required={true}
        />
        <Select
          labelId="select-category"
          id="select-category"
          // open={setOpen}
          // open={handleSelectClose}
          // onOpen={handleSelectOpen}
          // value={category}
          // onChange={(event) => setCategory(event.target.value)}
        >
          <MenuItem value="todo">To Do</MenuItem>
          <MenuItem value="doing">Doing</MenuItem>
          <MenuItem value="done">Done</MenuItem>
        </Select>
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
