import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { PaddedPaper } from "../../components/common/padded-paper";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0),
}));

const CardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
  gridGap: theme.spacing(4),
  padding: theme.spacing(0, 4),
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    padding: theme.spacing(0, 2),
  },
  marginTop: theme.spacing(2),
}));

export const WhatWeProvide = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Why Us?
      </Typography>
      <Typography variant="body1" gutterBottom>
        We are an organization that provides free services to help people find
        jobs and improve their skills.
      </Typography>
      <CardContainer>
        <PaddedPaper
          // sx={{
          //   borderTop: `4px solid transparent`,
          //   borderColor: "primary.main",
          // }}
          elevation={12}
        >
          <Typography variant="h6" gutterBottom>
            Connect you with employers
          </Typography>
          <Typography variant="body1">
            We connect you with employers who are looking for people like you.
          </Typography>
        </PaddedPaper>
        <PaddedPaper elevation={12}>
          <Typography variant="h6" gutterBottom>
            Get hands-on training
          </Typography>
          <Typography variant="body1">
            We provide hands-on training to help you improve your skills. If
            folks are lacking basic education, there are free classes available.
          </Typography>
        </PaddedPaper>
        <PaddedPaper elevation={12}>
          <Typography variant="h6" gutterBottom>
            Amazing benefits
          </Typography>
          <Typography variant="body1">
            We provide amazing benefits to help you get back on your feet.
            Facilities such as insuarance, hygiene products, and food are
            available.
          </Typography>
        </PaddedPaper>
      </CardContainer>
    </Container>
  );
};
