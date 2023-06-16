"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    console.log((0, node_path_1.resolve)((0, node_path_1.join)(__dirname, "..", "storage", "listings.json")));
    const listings = await node_fs_1.promises.readFile((0, node_path_1.resolve)((0, node_path_1.join)(__dirname, "..", "storage", "listings.json")));
    res.json(JSON.parse(listings.toString()));
});
exports.default = router;
//# sourceMappingURL=listing.js.map