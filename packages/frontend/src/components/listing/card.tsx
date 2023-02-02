import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import { Listing } from "../../services/api/listing";
import { PaddedPaper } from "../common/padded-paper";

export const ListingCard = ({ title, description, hourlyRate }: Listing) => {
  return (
    <PaddedPaper sx={{ width: 320, cursor: "pointer" }}>
      <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
        <Avatar>{title[0].toUpperCase()}</Avatar>
        <Stack direction="column">
          <Typography variant="h5">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
      </Stack>
      <Typography variant="body1" sx={{ mt: 2 }}>
        ₹{hourlyRate}/hr
      </Typography>
    </PaddedPaper>
  );
};
