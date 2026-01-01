import {
  createMessageD,
  deleteMessagesD,
  getAllMessagesD,
  getMessagesByIdD,
  updateMessagesD,
} from "../dal/MessagesD.js";

export const createMessage = async (req, res) => {
  try {
    const { userId, username, content } = req.body;
    const newMessage = { userId, username, content, createdAt: new Date() };
    const addmessge = await createMessageD(newMessage);
    if (addmessge) {
      res.json("Message added");
    } else {
      res.json("Message not added");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
export const getAllMessages = async (req, res) => {
  try {
    const AllMessages = await getAllMessagesD();
    res.json(AllMessages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
export const getMessagesByIdC = async (req, res) => {
  try {
    const { userId } = req.params;
    if (req.user.id == userId) {
      res.json(await getMessagesByIdD(userId));
    } else {
      res.json("user not approved!");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};

export const updatedMessagesC = async (req, res) => {
  try {
    const { id } = req.params;
    if(req.user.id==id){
    const { content } = req.body;
    const updatedMessage = await updateMessagesD(id, content);
    res.json(updatedMessage);}else{res.json("user not approved!")}
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};

export const deleteMessages = async (req, res) => {
  try {
    const { id } = req.params;
    if (req.user.id==id){
    const deleteMessage = await deleteMessagesD(userId);
    res.json(deleteMessage);}else{res.json("user not approved!")}
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
