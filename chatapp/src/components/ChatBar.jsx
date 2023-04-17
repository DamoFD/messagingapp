import React, { useContext } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import TextField from './TextField';
import socket from '../util/socket';
import { MessagesContext } from '../pages/Chat';

function ChatBar({userid}) {
    const { setMessages } = useContext(MessagesContext)
  return (
    <>
        <Formik
            initialValues={{message: ""}}
            validationSchema={Yup.object({
                message: Yup.string().min(1).max(255),
            })}
            onSubmit={(values, actions) => {
                const message = {to: userid, from: null, content: values.message}
                socket.emit("dm", message);
                setMessages(prevMsgs => [message, ...prevMsgs]);
                actions.resetForm();
            }}
            >
                <Form className='w-full flex'>
                    <TextField
                        name="message"
                        placeholder="Type message here..."
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
    </>
  )
}

export default ChatBar