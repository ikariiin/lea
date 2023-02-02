import { Button, Chip, Divider, styled, Typography } from "@mui/material";
import React from "react";
import { RiBuildingFill, RiKeyFill } from "react-icons/ri";
import { Listing as IListing } from "../../services/api/listing";
import { PaddedPaper } from "../common/padded-paper";

const Header = styled("header")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(1),
}));

const Grow = styled("div")(() => ({
  flexGrow: 1,
}));

const Actions = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: theme.spacing(2),
  alignItems: "center",
}));

export const Listing = (listing: IListing) => {
  return (
    <PaddedPaper
      sx={{
        marginBottom: 2,
        "&:last-child": {
          marginBottom: 0,
        },
      }}
    >
      <Header>
        <Typography variant="h4">{listing.title}</Typography>
        <Chip icon={<RiKeyFill size={20} />} label={listing.jobType} />
        <Chip icon={<RiBuildingFill size={20} />} label={listing.education} />
        <Grow />
        <Typography variant="h6">{listing.city}</Typography>
      </Header>
      <Typography variant="body1">{listing.details}</Typography>
      <Divider
        sx={{
          mt: 2,
          mb: 2,
        }}
      />
      <Actions>
        <Typography variant="h6">₹{listing.hourlyRate} / hr</Typography>
        <Button variant="contained" color="primary">
          Apply Now
        </Button>
      </Actions>
    </PaddedPaper>
  );
};
