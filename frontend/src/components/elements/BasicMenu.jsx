import * as React from 'react';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Menu, MenuItem, Toolbar } from "@mui/material";

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickHome = () => navigate("/");
  const handleClickContact = () => navigate("/contact");
  const handleClickPhotography = () => navigate("/photography");
  const handleClickProjects = () => navigate("/projects");

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (anchorEl && !anchorEl.contains(event.target)) {
        handleClose();
      }
    };

    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, anchorEl]);

  return (
    <div>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem onClick={handleClickHome}>Home</MenuItem>
          <MenuItem onClick={handleClickContact}>Contact</MenuItem>
          <MenuItem onClick={handleClickPhotography}>Photography</MenuItem>
          <MenuItem onClick={handleClickProjects}>Projects</MenuItem>
        </Menu>
      </Toolbar>
    </div>
  );
}
