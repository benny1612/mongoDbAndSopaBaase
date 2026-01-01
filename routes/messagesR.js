import express from "express";



import { createMessage, getAllMessages, getMessagesByIdC, updatedMessagesC } from "../controllers/messagesC.js";
import { userValdietM } from "../middlewares/Middleware.js";
import { updateMessagesD } from "../dal/MessagesD.js";

const router = express.Router();
router.post("/",userValdietM,createMessage);
router.get("/",userValdietM,getAllMessages)
router.get("/user/:userId",userValdietM,getMessagesByIdC)
router.put("/:id",userValdietM,updatedMessagesC)








export default router;