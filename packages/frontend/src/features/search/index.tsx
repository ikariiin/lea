import { Stack, styled } from "@mui/material";
import React from "react";
import { HeroInput } from "../../components/hero/input";
import {
  RiBriefcaseFill as JobIcon,
  RiUserLocationFill as UserLocationIcon,
} from "react-icons/ri";
import { useQuery } from "../../services/hooks/use-query";
import { Sidebar } from "./sidebar";
import { Footer } from "../../components/footer";
import { Listings } from "./listings";
import { Header } from "../../components/header";

const HeaderContainer = styled("header")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(6, 8),
}));

const Content = styled("main")(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(0, 8, 4, 8),
  display: "grid",
  gridTemplateColumns: "1fr 5fr",
  gap: theme.spacing(4),
  position: "relative",
}));

export const Search = () => {
  const query = useQuery();

  const [city, setCity] = React.useState(query.get("city") || "");
  const [occupation, setOccupation] = React.useState(
    query.get("occupation") || "",
  );

  return (
    <React.Fragment>
      <Header />
      <HeaderContainer>
        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
          <HeroInput
            icon={<UserLocationIcon />}
            placeholder="City"
            style={{
              width: 300,
            }}
            value={city}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCity(e.target.value)
            }
          />
          <HeroInput
            icon={<JobIcon />}
            placeholder="Search for your dream occupation"
            value={occupation}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setOccupation(e.target.value)
            }
          />
        </Stack>
      </HeaderContainer>
      <Content>
        <Sidebar />
        <Listings />
      </Content>
      <Footer />
    </React.Fragment>
  );
};
