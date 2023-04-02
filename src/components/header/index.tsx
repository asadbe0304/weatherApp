import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TextField from "@mui/material/TextField"
import Autocomplete from '@mui/material/Autocomplete/Autocomplete';
import { useState, ChangeEvent } from "react"
import "./style.scss"
interface Props { }

interface Data {
  auth: boolean | string;
  anchorEl: null;
}

interface AutocompleteOption {
  label: string;
}

type AutocompleteOption1 = string;

const header: React.FC<Props> = () => {

  let user = localStorage.getItem("user")


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 3 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <div className='profile-menu'>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{width:"40px", height:"40px"}}
            >
              <AccountCircle />
            </IconButton>
            <Typography>{user}</Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default header
