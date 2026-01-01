import { addUserD, userValdiet } from "../dal/usersD.js";

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const addUser = await addUserD(username, password);
    if (addUser) {
      res.json("success");
    } else {
      res.json("error");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const User = await userValdiet(username, password);
    if (User) {
      res.json("success");
    } else {
      res.json("error");
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ err });
  }
};
