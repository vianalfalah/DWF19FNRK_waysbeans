<<<<<<< HEAD
const { User , Profile} = require("../../models");
=======
const { User } = require("../../models");
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtKey = process.env.JWT_KEY;

exports.register = async (req, res) => {
  try {
    const schema = Joi.object({
      fullName: Joi.string().min(5).required(),
      email: Joi.string().email().min(4).required(),
<<<<<<< HEAD
      password: Joi.string().min(8).required(),
=======
      password: Joi.string().required(),
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    });

    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    const checkUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (checkUser) {
      return res.send({
        status: "email alredy taken",
      });
    }

    if (error) {
      return res.status(400).send({
        status: "Validation Error",
        error: {
          message: error.details.map((error) => error.message),
        },
      });
    }

    const { fullName, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ ...req.body, password: hashedPassword });
<<<<<<< HEAD
    await Profile.create({
      userId: user.id,
      photo: "default",
      isAdmin: false,
    })
=======
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb

    const privateKey = "vian-alfalah";
    const token = jwt.sign({ id: user.id }, privateKey);

    res.send({
      status: "Register Success",
      data: {
        fullName,
        email,
        token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().min(8).required(),
      password: Joi.string().min(8).required(),
    });

    const { error } = schema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      return res.status(400).send({
        error: {
          message: error.details.map((error) => error.message),
        },
      });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      return res.status(400).send({
        message: "Invalid Login",
      });
    }

    const validPass = await bcrypt.compare(password, user.password);

    if (!validPass) {
      return res.status(400).send({
        message: "Invalid Login",
      });
    }

    const privateKey = "vian-alfalah";
    const token = jwt.sign({ id: user.id }, privateKey);

    res.send({
      status: "Login Success",
      data: {
<<<<<<< HEAD
        fullName: user.fullName,
        email: user.email,
=======
        email,
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        token,
      },
    });
  } catch (error) {
    //error here
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};

exports.auth = async (req, res, next) => {
  let header, token;

  if (
    !(header = req.header("Authorization")) ||
    !(token = header.replace("Bearer ", ""))
  )
    return res.status(401).send({
      message: "Access Denied",
    });
  try {
    const privateKey = "vian-alfalah";
    const verified = jwt.verify(token, privateKey);
    req.user = verified;
    next();
  } catch (error) {
    //error here
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Invalid Token",
      },
    });
  }
};