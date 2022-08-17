const models = require("../models/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 12;
const SECRET_KEY = "M3J4T3RB4NG";

// Register User
async function createUser(req, res) {
  const { user_name, user_password, user_email } = req.body;
  const isEmail = await models.user.findOne({
    where: { user_email: user_email },
  });
  const isTrue = await models.user.findOne({ where: { user_name: user_name } });
  console.log(isTrue);

  const salt = await bcrypt.genSalt(saltRounds);
  const encryptPassword = await bcrypt.hash(user_password, salt);
  const dataRegister = {
    ...req.body,
    user_password: encryptPassword,
  };
  if (isEmail) {
    res.send({ message: "Email already registered" });
  } else {
    if (isTrue) {
      res.send({ message: "User already exists" });
    } else {
      models.user.create(dataRegister);
      res.send({ message: "Success register user" });
    }
  }
}

// Login User
async function getUser(req, res) {
  const { user_name, user_password } = req.body;

  const isTrue = await models.user.findOne({
    where: { user_name: user_name },
  });

  if (isTrue) {
    const comparePassword = await bcrypt.compare(
      user_password,
      isTrue.user_password
    );
    if (comparePassword) {
      const token = jwt.sign(
        { user_name, admin: isTrue.user_admin, address: isTrue.user_address },
        SECRET_KEY
      );
      models.user.update(
        { user_token: token },
        { where: { user_name: user_name } }
      );
      res.send({ message: "success", token: token });
    } else {
      res.send({ message: "password error" });
    }
  } else {
    res.send({ message: "user not found" });
  }
}

module.exports = {
  createUser,
  getUser,
};
