const models = require("../models/index");

// Get All
async function listOrder(req, res) {
  const data = await models.order.findAll();
  return res.status(200).send({ message: "Menu", data: data });
}

// Insert Order
async function insertOrder(req, res) {
  let { food_id } = req.body;

  const isAble = await models.order.findOne({
    where: { food_id: food_id },
  });

  if (isAble) {
    models.order.update(
      { quantity: isAble.quantity + 1 },
      { where: { food_id: food_id } }
    );
    return res.status(200).send({ message: "Success!", data: req.body });
  } else {
    models.order.create(req.body);
    return res.status(200).send({ message: "Success!", data: req.body });
  }
}

// Update Order
async function updateOrder(req, res) {
  const { quantity } = req.body;
  const isAble = await models.order.findOne({
    where: { food_id: req.body.food_id },
  });

  if (isAble) {
    models.order.update(
      { quantity: quantity },
      { where: { food_id: req.body.food_id } }
    );
    return res.status(200).send({ message: "Success!", data: req.body });
  }
}

// Delete
async function deleteOrder(req, res) {
  const { food_id } = req.body;
  console.log(req.body);
  const isAble = await models.order.findOne({
    where: { food_id: req.body.food_id },
  });
  if (isAble) {
    models.order.destroy({ where: { food_id: req.body.food_id } });
    return res.status(200).send({ message: "Success!", data: req.body });
  }
}

module.exports = {
  listOrder,
  insertOrder,
  updateOrder,
  deleteOrder,
};
