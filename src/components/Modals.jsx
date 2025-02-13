import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField } from "@mui/material";

const SimpleModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const FriensName = form.FriendName.value;
    const FriendEmail = form.FriendEmail.value;
    const Course = form.course.value;
    console.log(Name, FriendEmail, FriensName, Course);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-[#1A73E8] rounded-md py-2 px-5 w-max text-white "
      >
        Reffer Now
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #EEF5FF",
            boxShadow: 24,
            borderRadius: 3,
            p: 4,
          }}
        >
          <Typography id="form-modal-title" variant="h6" component="h2">
            Refaral Form
          </Typography>
          <form onSubmit={handleSubmit} className="mb-5">
            <TextField label="Name" name="name" fullWidth margin="normal" />
            <TextField
              label="Friend's Name"
              name="FriendName"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Friend's Email"
              name="FriendEmail"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Course Name"
              name="course"
              fullWidth
              margin="normal"
            />
            <button
              className="mt-5 bg-[#1A73E8] mr-5 px-4 rounded text-white py-2"
              type="submit"
            >
              Submit
            </button>
            <button
              type="button"
              className="mt-5 bg-[#1A73E8] mr-5 px-4 rounded text-white py-2"
              onClick={handleClose}
            >
              Close
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default SimpleModal;
