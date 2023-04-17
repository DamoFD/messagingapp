import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Dialog, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "./TextField";

const AddFriendModal = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth maxWidth="sm" 
    >
        <DialogContent
                sx={{
                    backgroundColor: '#1f2937',
                }} 
        >
            <div className='flex justify-between items-center'>
                <div className="w-full text-center">
        <h1 className='text-white text-3xl'>Add a Friend</h1>
        </div>
        <CloseIcon onClick={handleClose} className="cursor-pointer text-white" />
        </div>
        <Formik
            initialValues={{ friendName: ""}}
              validationSchema={Yup.object({
                friendName: Yup.string()
                  .required("Username required.")
                  .min(6, "Username is too short.")
                  .max(28, "Username is too long."),
              })}
            onSubmit={values => {
                handleClose();
            }}    
        >
          <Form className="flex flex-col">
            <TextField
              placeholder="Enter Friend's Username"
              name="friendName"
            />
            <button className='text-white bg-purple-600' type="submit">
              Submit
            </button>
          </Form>
        </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddFriendModal;
