import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import LeaLogo from "../../assets/images/lea-logo.png";
import { HeroInput } from "../hero/input";

const Container = styled("footer")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.secondary.dark,
  color: theme.palette.secondary.contrastText,
  padding: theme.spacing(4, 6),
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "center",
}));

export const Footer = () => {
  return (
    <Container>
      <Box>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <Box
            component="img"
            src={LeaLogo}
            alt="Lea Logo"
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Lea
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/listings"
          >
            Listings
          </Button>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/about"
          >
            About
          </Button>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/contact"
          >
            Contact
          </Button>
          <Button
            variant="text"
            color="inherit"
            component={NavLink}
            to="/privacy"
          >
            Privacy
          </Button>
        </Stack>
      </Box>
      <Box>
        <Stack direction="row" spacing={2}>
          <HeroInput placeholder="Subscribe to our newsletter" />
          <Button variant="contained" color="primary" sx={{ width: "20%" }}>
            Subscribe
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};
