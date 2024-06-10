import express from "express";
import { Register, bookmark, follow, getProfile, login, logout, strangersData, unfollow } from "../controllers/userControl.js";
import isAuthenticated from "../config/auth.js";


const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/bookmark/:id").put(isAuthenticated, bookmark);
router.route("/profile/:id").get(isAuthenticated, getProfile);
router.route("/stranger/:id").get(isAuthenticated, strangersData);
router.route("/follow/:id").post(isAuthenticated, follow);
router.route("/unfollow/:id").post(isAuthenticated, unfollow);

export default router;