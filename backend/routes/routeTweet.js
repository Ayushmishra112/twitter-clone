import express from "express";
import { AllTweets, FollowedTweets, createTweet, deleteTweet, likeOrDislike } from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";


const router = express.Router();

router.route("/create").post(isAuthenticated,createTweet);
router.route("/delete/:id").delete(isAuthenticated,deleteTweet);
router.route("/like/:id").put(isAuthenticated,likeOrDislike);
router.route("/alltweets/:id").get(isAuthenticated, AllTweets);
router.route("/followingtweets/:id").get(isAuthenticated, FollowedTweets);

export default router;