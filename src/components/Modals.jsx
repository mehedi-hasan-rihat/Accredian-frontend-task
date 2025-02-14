import React, { useState } from "react";
import { Modal, Box, Button, Typography, TextField } from "@mui/material";
import toast from "react-hot-toast";

const SimpleModal = () => {
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    FriendName: "",
    FriendEmail: "",
    course: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const Name = form.name.value;
    const FriendName = form.FriendName.value;
    const FriendEmail = form.FriendEmail.value;
    const Course = form.course.value;

    let valid = true;
    let newErrors = { name: "", FriendName: "", FriendEmail: "", course: "" };

    // Simple validation
    if (!Name) {
      valid = false;
      newErrors.name = "Name is required";
    }
    if (!FriendName) {
      valid = false;
      newErrors.FriendName = "Friend's Name is required";
    }
    if (!FriendEmail) {
      valid = false;
      newErrors.FriendEmail = "Friend's Email is required";
    } else if (!/\S+@\S+\.\S+/.test(FriendEmail)) {
      valid = false;
      newErrors.FriendEmail = "Please enter a valid email";
    }
    if (!Course) {
      valid = false;
      newErrors.course = "Course Name is required";
    }

    setErrors(newErrors);

    if (valid) {
      const postData = { Name, FriendEmail, FriendName, Course };
      try {
        const response = await fetch("http://localhost:4000/refers", {
          method: "POST",
          body: JSON.stringify(postData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await response.json();
        if (jsonData.message === "Data inserted successfully") {
          toast.success("Refer Added to DB 🛢️");
        }
        handleClose();
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="bg-[#1A73E8] rounded-md py-2 px-5 w-max text-white"
      >
        Refer Now
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
            Referral Form
          </Typography>
          <form onSubmit={handleSubmit} className="mb-5">
            <TextField
              label="Name"
              name="name"
              fullWidth
              margin="normal"
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Friend's Name"
              name="FriendName"
              fullWidth
              margin="normal"
              error={!!errors.FriendName}
              helperText={errors.FriendName}
            />
            <TextField
              label="Friend's Email"
              name="FriendEmail"
              fullWidth
              margin="normal"
              error={!!errors.FriendEmail}
              helperText={errors.FriendEmail}
            />
            <TextField
              label="Course Name"
              name="course"
              fullWidth
              margin="normal"
              error={!!errors.course}
              helperText={errors.course}
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
