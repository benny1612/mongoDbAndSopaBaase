import { userValdiet } from "../dal/usersD.js";

userValdiet
export const userValdietM = async (req, res, next) => {
  const {username,password} = req.headers;
  const userV = await userValdiet(username,password);
  if (userV) {
    req.user = userV;
    next();
  } else {
    res.status(401).send("user not registerd");
  }
};

