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

interface Props { }

interface Data {
  auth: boolean | string;
  anchorEl: null;
}

interface AutocompleteOption {
  label: string;
}
// or
type AutocompleteOption1 = string;

const header: React.FC<Props> = () => {
  const [auth, setAuth] = useState<Data | boolean>(true);
  const [anchorEl, setAnchorEl] = useState<Data | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setAuth(event.target.checked);
  };
  let user = localStorage.getItem("user")
  const handleMenu = (event: ChangeEvent<null>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          {/* <Autocomplete
            disablePortal
            id="combo-box-demo"
            // options={weatherDatas}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Movie" />}
          /> */}
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

            <Menu
              id="menu-appbar"
              // anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile
              </MenuItem>
            </Menu>
            <Typography>{user}</Typography>

          </div>
          {/* )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default header
