import express from "express";
import listingRouter from "./routes/listing";

const app = express();

app.use(express.json());

app.use("/listings", listingRouter);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

