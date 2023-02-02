import { Box } from "@mui/material";
import React from "react";
import { Listing } from "../../components/listing";
import { getListings, Listing as IListing } from "../../services/api/listing";

export const Listings = () => {
  const [listings, setListings] = React.useState<IListing[]>([]);

  const fetchListings = async () => {
    const response = await getListings();
    setListings(response);
  };

  React.useEffect(() => {
    fetchListings();
  }, []);

  return (
    <Box>
      {listings.map((listing) => (
        <Listing key={listing.id} {...listing} />
      ))}
    </Box>
  );
};
