import React from "react"
import PropTypes from "prop-types"

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from '@mui/material';

export default function Header({title, onMenuClick}) {
  const [menuBool, setMenuBool] = React.useState(false);
return (
	<AppBar >
		<Toolbar>
		<IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
      onClick={() => setMenuBool(!menuBool)}
		>
			{/*This is a simple Menu
			Icon wrapped in Icon */}
			<MenuIcon />
		</IconButton>
    <Menu
        id="profile-menu"
        open={Boolean(menuBool)}
        anchorEl={menuBool}
        onClose={() => setMenuBool(null)}
        disableAutoFocusItem
        sx={{ alignContent: 'center' }}
      >
        <MenuItem
          // component={RouterLink}
          onClick={() => setMenuBool(null)}
          // to="/app/profile/changepassword"
        >
          Change Password
        </MenuItem>
        <MenuItem
          // component={RouterLink}
          onClick={() => setMenuBool(null)}
          // to="/app/profile/changeprofile"
        >
          Edit Profile
        </MenuItem>
      </Menu>

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			{title}
		</Typography>
		<Button color="inherit" sx={{ml: 2}}>Login</Button>
		</Toolbar>
	</AppBar>
);
}

PropTypes.Header = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
}