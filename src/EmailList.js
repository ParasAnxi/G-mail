import React from "react";
import "./EmailList.css";
import { Checkbox } from "@mui/material";
import { IconButton } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import RedoIcon from "@mui/icons-material/Redo";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import SettingsIcon from "@mui/icons-material/Settings";
import Section from "./Section";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EmailRow from './EmailRow'
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./firebase";
const EmailList = () => {

  const [emails ,setEmails] = useState([]);

  useEffect(()=>{
    db.collection('emails').orderBy('timestamp','desc').onSnapshot(snapshot=>setEmails(snapshot.docs.map(doc=>({
      id: doc.id,
      data: doc.data(),
    }))))
  },[])
  return (
    <div className="emailList">
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>
      <div className="emailList_sections">
            <Section Icon={InboxIcon} title='Primary' color='red' selected/>
            <Section Icon={PeopleIcon} title='Social' color='#1a73e8' />
            <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
      </div>

      <div className="emailList_list">
        {emails.map(({id ,data:{to ,subject ,message ,timestamp}})=>(
          <EmailRow
          id ={id}
          key={id}
          title={to}
          subject={subject}
          description={message}
          time={new Date(timestamp?.seconds*1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
