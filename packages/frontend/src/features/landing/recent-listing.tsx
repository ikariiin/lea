import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { ListingCard } from "../../components/listing/card";
import { getRecentListings, Listing } from "../../services/api/listing";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  padding: theme.spacing(4, 2),
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
}));

export const RecentListing = () => {
  const [listings, setListings] = React.useState<Listing[]>([]);

  const getListings = async () => {
    const listings = await getRecentListings();
    setListings(listings);
  };

  React.useEffect(() => {
    getListings();
  }, []);

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Recent Listings
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          flexWrap: "nowrap",
          overflowX: "auto",
          // width: "100%",
          p: 1,
        }}
      >
        {listings.map((listing) => (
          <ListingCard key={listing.id} {...listing} />
        ))}
      </Stack>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Don&apos;t see what you&apos;re looking for? No worries, browse all
        listings here.
      </Typography>
      <Button
        component={NavLink}
        to="/listings"
        variant="contained"
        sx={{ mt: 1 }}
        size="large"
        color="primary"
      >
        Browse All Listings
      </Button>
    </Container>
  );
};
