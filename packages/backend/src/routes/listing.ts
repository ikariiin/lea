import { Router } from "express";
import { promises as fs } from "node:fs";
import { join, resolve } from "node:path";

const router = Router();

router.get("/", async (req, res) => {
  console.log(resolve(
    join(
      __dirname,
      "..",
      "storage",
      "listings.json",
    )
  ))
  const listings = await fs.readFile(
    resolve(
      join(
        __dirname,
        "..",
        "storage",
        "listings.json",
      )
    )
  );

  res.json(JSON.parse(listings.toString()));
});

export default router;
