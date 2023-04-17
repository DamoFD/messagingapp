import React, { useState, useCallback, useContext } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Dialog, DialogContent } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "./TextField";
import socket from "../util/socket";
import { FriendContext } from "../pages/Chat";

const AddFriendModal = ({ open, handleClose }) => {
  const [error, setError] = useState("");
  const closeModal = useCallback(
    () => {
      setError("");
      handleClose();
    }, [handleClose],
  )

  const {setFriendList} = useContext(FriendContext)

  return (
    <>
      <Dialog
        open={open}
        onClose={closeModal}
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
        <p className='text-red-600'>{error}</p>
        </div>
        <CloseIcon onClick={closeModal} className="cursor-pointer text-white" />
        </div>
        <Formik
            onSubmit={values => {
              socket.emit(
                "add_friend",
                values.friendName,
                ({ errorMsg, done, newFriend}) => {
                if (done) {
                  setFriendList(c => [newFriend, ...c])
                  closeModal();
                  return;
                }
                setError(errorMsg);
              })
          }}  
            initialValues={{ friendName: ""}}
              validationSchema={Yup.object({
                friendName: Yup.string()
                  .required("Username required.")
                  .min(6, "Username is too short.")
                  .max(28, "Username is too long."),
              })}  
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
