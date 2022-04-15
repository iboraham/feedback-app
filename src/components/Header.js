import React from "react"
import PropTypes from "prop-types"

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CommentIcon from '@mui/icons-material/Comment';

export default function Header({title}) {
return (
	<AppBar position="relative" sx={{ mb:5 }}>
		<Toolbar>
		<CommentIcon
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		/>

		<Typography variant="h6"
			component="div" sx={{ flexGrow: 1 }}>
			{title}
		</Typography>
		</Toolbar>
	</AppBar>
);
}

Header.defaultProps = {
	title: "My App"
};

PropTypes.Header = {
  title: PropTypes.string.isRequired,
};