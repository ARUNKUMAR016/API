import express from "express";
import {
  songIndex,
  songCreate,
  songUpdate,
  songDelete,
} from "../controllers/songs.controller.js";
// import { songIndex } from "../controllers/songs.controller.js";
const router = express.Router();

//CRUD functionality
// for reading
router.get("/", songIndex);
// for create
router.post("/", songCreate);

// for update
router.put("/:id", songUpdate);

// for delete
router.delete("/:id", songDelete);

export default router;
