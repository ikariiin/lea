import { Box, Button, Link, Stack, styled, Typography } from "@mui/material";
import React from "react";
import BannerImage from "../../assets/images/women-working.jpg";
import { HeroInput } from "../../components/hero/input";
import {
  RiBriefcaseFill as JobIcon,
  RiUserLocationFill as UserLocationIcon,
} from "react-icons/ri";
import LeaLogo from "../../assets/images/lea-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { reverseGeocode } from "../../services/api/geolocation";

const Container = styled(Box)(() => ({
  width: "100%",
  height: "80vh",
  backgroundImage: `url(${BannerImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(3, 8),
  color: theme.palette.background.paper,
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
}));

const Form = styled("form")(({ theme }) => ({
  width: "50vw",
  minWidth: "300px",
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(4),
  display: "flex",
  "& > *": {
    marginRight: theme.spacing(2),
  },
  "& > *:last-child": {
    marginRight: 0,
  },
}));

export const Banner = () => {
  const [city, setCity] = React.useState("");
  const [occupation, setOccupation] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const navigate = useNavigate();

  const getCity = React.useCallback(async () => {
    // Get geolocation
    navigator.geolocation.getCurrentPosition(async (position) => {
      const response = await reverseGeocode({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setCity(response.address.town);
    });
  }, []);

  const onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      navigate(`/search?city=${city}&occupation=${occupation}`, {
        replace: true,
      });
    },
    [city, occupation],
  );

  React.useEffect(() => {
    getCity();
  }, []);

  return (
    <Container>
      <InnerContainer>
        <Stack direction="row" spacing={2} alignItems="center">
          <Box
            component="img"
            src={LeaLogo}
            alt="Lea Logo"
            sx={{
              width: "150px",
              height: "auto",
            }}
          />
          <Typography variant="h2">Local Employment for All</Typography>
        </Stack>
        <Form onSubmit={onSubmit}>
          <HeroInput
            icon={<UserLocationIcon />}
            placeholder="City"
            style={{
              width: "270px",
            }}
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
            name="city"
            disabled={isSubmitting}
          />
          <HeroInput
            icon={<JobIcon />}
            placeholder="Search for your dream occupation"
            style={{ flexGrow: 1 }}
            name="occupation"
            value={occupation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOccupation(e.target.value)
            }
            disabled={isSubmitting}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ width: "175px" }}
            disabled={isSubmitting}
          >
            Search
          </Button>
        </Form>
        <Typography variant="body2">
          We will help you find the right job for you. Also, check out our{" "}
          <Link component={NavLink} to="/free-courses">
            free courses
          </Link>
          .
        </Typography>
      </InnerContainer>
    </Container>
  );
};
