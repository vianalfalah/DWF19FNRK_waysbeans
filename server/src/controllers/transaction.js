<<<<<<< HEAD
const {
  User,
  Transaction,
  Product,
  TransToProd,
  Profile,
} = require("../../models");
=======
const { User, Transaction, Product, TransToProd } = require("../../models");
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
const responSuccess = "Response Success";
const Joi = require("joi");

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt", "UserId", "user"],
      },
<<<<<<< HEAD
      order: [["createdAt", "DESC"]],
=======
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: Product,
          as: "products",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          through: {
            attributes: [["orderQuantity", "qty"]],
            as: "orderQuantity",
          },
        },
      ],
    });

    if (!transactions) {
      return res.status(400).send({
        status: "Users Emptty",
        data: {
<<<<<<< HEAD
          transactions,
=======
          trans,
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        },
      });
    }

    res.send({
      status: responSuccess,
      data: {
        transactions,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};

exports.getSingleTranById = async (req, res) => {
  try {
    const { id } = req.params;

<<<<<<< HEAD
    const transactions = await Transaction.findOne({
=======
    const tran = await Transaction.findOne({
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      where: {
        id,
      },
      include: [
        {
          model: User,
          as: "user",
<<<<<<< HEAD
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
=======
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        },
        {
          model: Product,
          as: "products",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          through: {
            model: TransToProd,
            as: "information",
            attributes: ["orderQuantity"],
          },
        },
      ],
    });

<<<<<<< HEAD
    if (!transactions) {
      return res.status(404).send({
        status: `Transactions With id: ${id} Not Found`,
=======
    if (!tran) {
      return res.status(404).send({
        status: `User With id: ${id} Not Found`,
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        data: null,
      });
    }

<<<<<<< HEAD
    const profile = await Profile.findOne({ where: { id } });
    if (!profile || profile.isAdmin === false) {
      return res.status(401).send({
        status: "Response fail",
        error: {
          message: "User Access Denied",
        },
      });
    }

    res.send({
      status: responSuccess,
      data: {
        transactions,
=======
    res.send({
      status: responSuccess,
      data: {
        tran,
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};

exports.addTran = async (req, res) => {
  try {
    const { body } = req.body;
    const schema = Joi.object({
      name: Joi.string().min(2).required(),
      email: Joi.string().email().min(10).required(),
      pos: Joi.number().required(),
      phone: Joi.number().required(),
      address: Joi.string().min(5).required(),
<<<<<<< HEAD
      products: Joi.string().required(),
      attachment: Joi.string().required(),
=======
      products: Joi.required(),
      attachment: Joi.required(),
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    });
    const { error } = schema.validate(body, {
      abortEarly: false,
    });

    const { name, email, pos, phone, address, attachment, products } = req.body;
<<<<<<< HEAD

=======
    const productsData = JSON.parse(products);
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    const { id: userID } = req.user;
    const transaction = await Transaction.create({
      name,
      email,
      pos,
      phone,
      address,
<<<<<<< HEAD
      attachment: req.file.filename,
      status: "Waiting Approve",
      userID,
    });
    const productsData = JSON.parse(products);
=======
      attachment,
      status: "Waiting Approve",
      userID,
    });
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    await Promise.all(
      productsData.map(async (product) => {
        const { id, orderQuantity } = product;
        console.log(product);
        await TransToProd.create({
          transID: transaction.id,
          prodID: id,
          orderQuantity: orderQuantity,
        });
      })
    );

    const transactionAfterAdd = await Transaction.findOne({
      where: { id: transaction.id },
      attributes: {
        exclude: ["createdAt", "updatedAt", "userId"],
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
        {
          model: Product,
          as: "products",
          attributes: {
            exclude: ["createdAt", "updatedAt", "stock"],
          },
          through: {
            attributes: [["orderQuantity", "qty"]],
            as: "orderQuantity",
          },
        },
      ],
    });

    res.send({
      status: responSuccess,
      message: "Transaction Successfully Created",
      data: transactionAfterAdd,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};

exports.updateTran = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
<<<<<<< HEAD
    const schema = Joi.object({
      status: Joi.string().min(4).required(),
    });
    const { error } = schema.validate(body, {
      abortEarly: false,
    });
=======

>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
    const getTranById = await Transaction.findOne({
      where: {
        id,
      },
    });

    if (!getTranById) {
      return res.status(404).send({
<<<<<<< HEAD
        status: `Transactions With id: ${id} Not Found`,
=======
        status: `User With id: ${id} Not Found`,
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        data: null,
      });
    }

<<<<<<< HEAD
    const transactions = await Transaction.update(body, {
=======
    const tran = await Transaction.update(body, {
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
      where: {
        id,
      },
    });

    const getTranAfterUpdate = await Transaction.findOne({
      where: {
        id,
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
<<<<<<< HEAD
        {
          model: Product,
          as: "products",
          attributes: {
            exclude: ["createdAt", "updatedAt", "stock"],
          },
          through: {
            attributes: [["orderQuantity", "value"]],
            as: "orderQuantity",
          },
        },
=======
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
      ],
    });

    res.send({
      status: responSuccess,
      message: "Update Success",
      data: {
        tran: getTranAfterUpdate,
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

exports.deleteTran = async (req, res) => {
  try {
    const { id } = req.params;

    const getTranById = await Transaction.findOne({
      where: {
        id,
      },
    });

    if (!getTranById) {
      return res.status(404).send({
<<<<<<< HEAD
        status: `Transactions With id: ${id} Not Found`,
=======
        status: `User With id: ${id} Not Found`,
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        data: null,
      });
    }

    await Transaction.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: responSuccess,
      message: `User With id: ${id} Delete Success`,
      data: {
        tran: null,
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

exports.restoreTran = async (req, res) => {
  try {
    const { id } = req.params;

    const tran = await Transaction.restore({
      where: {
        id,
      },
    });

    res.send({
      status: responSuccess,
      message: `User With id: ${id} Restore Success`,
      data: {
        tran,
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

exports.getMyTransaction = async (req, res) => {
  try {
    const { id } = req.user;
    const transactions = await Transaction.findAll({
      where: { userId: id },
      attributes: {
<<<<<<< HEAD
        exclude: ["updatedAt", "userId"],
      },
      order: [["createdAt", "DESC"]],
=======
        exclude: ["createdAt", "updatedAt", "userId"],
      },
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
        {
          model: Product,
          as: "products",
          attributes: {
            exclude: ["createdAt", "updatedAt", "stock"],
          },
          through: {
            attributes: [["orderQuantity", "qty"]],
            as: "orderQuantity",
          },
        },
      ],
    });
    if (transactions.length === 0) {
      return res.status(404).send({
<<<<<<< HEAD
        status: `User With id: ${id} Not Have Transaction`,
=======
        status: `User With id: ${id} Not Found`,
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
        data: null,
      });
    }

    res.send({
      status: "Success",
<<<<<<< HEAD
      message: "Successfully get detail transaction",
=======
      message: "successfully get detail transaction",
>>>>>>> e386c091abd7afc53b7bb62870e4a51f8588f0fb
      data: { transactions },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: {
        message: "Server Error",
      },
    });
  }
};

//template
exports.function = async (req, res) => {
  try {
    //code here
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
