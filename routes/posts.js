import express from "express";

// Controllers
import {
  getPosts,
  getPostsBySearch,
  createPost,
  updatePost,
  deletePost,
  getPost,
  likePost,
  commentPost,
} from "../controllers/post.js";

// MiddleWare
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.get("/:id", getPost);

router.patch("/:id/likePost", auth, likePost);
router.post("/:id/commentPost", auth, commentPost);

router.get("/search", getPostsBySearch);

export default router;
