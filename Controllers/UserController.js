import { UserModel } from "../Models/UserModel.js";

export const UserController = async (req, res) => {
  const email = req.query.email;
  const user = await req.body;
  const filter = { email };
  const update = {
    $set: {
      name: user.name,
      photo: user.photo,
    },
  };
  const options = {
    upsert: true,
  };

  try {
    const result = await UserModel.findOneAndUpdate(filter, update, options);
    res.send(result);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};
