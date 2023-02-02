import {
  Button,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { RiLogoutBoxFill, RiProfileFill, RiSearch2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import LeaLogo from "../../assets/images/lea-logo.png";

const Container = styled("header")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 6),
  // height: 80,
  display: "grid",
  gridTemplateColumns: "2fr 8fr 2fr",
  alignItems: "center",
  position: "sticky",
  top: 0,
  zIndex: 1,
  boxShadow: theme.shadows[2],
}));

export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = React.useMemo(() => Boolean(anchorEl), [anchorEl]);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Box>
        <NavLink to="/">
          <Box
            component="img"
            src={LeaLogo}
            alt="Lea Logo"
            sx={{ width: 60, height: 60 }}
          />
        </NavLink>
      </Box>
      <Box>
        <form>
          <TextField
            variant="outlined"
            placeholder="Search for your dream occupation"
            sx={{ width: "100%" }}
            InputProps={{
              endAdornment: <RiSearch2Line size={22} />,
            }}
          />
        </form>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {/* <Button variant="outlined">Sign In</Button> */}
        <Button variant="outlined" sx={{ ml: 2 }} onClick={handleClick}>
          John Doe
        </Button>
        <Menu open={open} onClose={handleClose} anchorEl={anchorEl}>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <RiProfileFill size={20} />
            </ListItemIcon>
            Profile
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <RiLogoutBoxFill size={20} />
            </ListItemIcon>
            Sign out
          </MenuItem>
        </Menu>
      </Box>
    </Container>
  );
};
