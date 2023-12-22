import { UserModel } from "../Models/UserModel.js";

export const GetUserController = async (req, res) => {
  try {
    const email = req.query.email;
    if (email) {
      const user = await UserModel.findOne({ email });
      res.send(user);
    } else {
      res.send("No Email");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
