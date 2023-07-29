import React from 'react'
import './Header.css'
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton ,Avatar} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AppsIcon from "@mui/icons-material/Apps";
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const signOut = ()=>{
    auth.signOut().then(()=>{
      dispatch(logout());
    });
  }
  return (
    <div className="header">
      <div className="header_left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://pngimg.com/uploads/gmail_logo/small/gmail_logo_PNG2.png"
          alt=""
        />
      </div>
      <div className="header_middle">
        <SearchIcon/>
        <input type="text" placeholder='search mail' />
    <ArrowDropDownIcon className='header_inputCaret'/>
      </div>
      <div className="header_right">
        <IconButton>
            <AppsIcon/>
        </IconButton>
        <IconButton>
            <NotificationsNoneIcon/>
        </IconButton>
        <Avatar style={{cursor:'pointer'}} onClick={signOut} src={user?.photoUrl}/>
      </div>
    </div>
  );
}

export default Header