import { Box, styled } from "@mui/material";
import React from "react";
import { Footer } from "../../components/footer";
import { Banner } from "./banner";
import { RecentListing } from "./recent-listing";
import { WhatWeProvide } from "./what-we-provide";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  marginBottom: theme.spacing(4),
}));

export const Landing = () => {
  return (
    <React.Fragment>
      <Container>
        <Banner />
        <WhatWeProvide />
        <RecentListing />
      </Container>
      <Footer />
    </React.Fragment>
  );
};
