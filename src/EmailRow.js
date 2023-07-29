import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";
const EmailRow = ({ id, title, subject, description, time }) => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const openMail = ()=>{
      dispatch(selectMail({
        id,title,subject,description,time
      }))
      navigate('/mail')
    }
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow_options">
        <Checkbox/>
        <IconButton>
            <StarBorderIcon/>
        </IconButton>
        <IconButton>
            <LabelImportantIcon/>
        </IconButton>
      </div>
      <h3 className="emailRow_title">
        {title} 
      </h3>
      <div className="emailRow_message">
        <h4>{subject}{" "}
            <span className="emailRow_description">
                -{description}
            </span>
        </h4>
      </div>
      <p className="emailRow_time">{time}</p>
    </div>
  );
};

export default EmailRow;
