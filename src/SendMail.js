import React from 'react'
import './SendMail.css'
import { Close } from '@mui/icons-material'
import { Button } from '@mui/material'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { closeSendMessage } from './features/mailSlice'
import { db } from './firebase'
import firebase from 'firebase/compat/app'
const SendMail = () => {
    const dispatch = useDispatch();
    const {register ,handleSubmit } = useForm();
    const onSubmit =(formData)=>{
        db.collection('emails').add(
            {
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            }
        );
        dispatch(closeSendMessage());
    };
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <Close className="sendMail_close" onClick={()=>dispatch(closeSendMessage())} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="email"
          placeholder="To"
          {...register("to", { required: true })}
        />
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />
        <input
          name="message"
          className="sendMail_mes"
          type="text"
          placeholder="mail"
          {...register("message", { required: true })}
        />
        <div className="sendMail_options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail_send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail