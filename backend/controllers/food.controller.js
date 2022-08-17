const models = require("../models/index");

// Get All
async function getFood(req, res) {
  const data = await models.food.findAll();
  return res.send({ message: "Food", data });
}

// Insert
async function addFood(req, res) {
  let { food_name } = req.body;

  if (food_name === "") return res.send({ message: "required" });

  const isAble = await models.food.findOne({
    where: { food_name: food_name },
  });
  if (isAble) {
    return res.status(500).send({ message: "duplicate" });
  } else {
    models.food.create(req.body);
    return res.status(200).send({ message: "success!", data: req.body });
  }
}

// Update
async function updateFood(req, res) {
  const isAble = await models.food.findOne({ where: req.body });
  if (isAble) {
    return res.status(500).send({ message: "duplicate" });
  } else {
    models.food.update(req.body, {
      where: { food_name: req.params.food_name },
    });
    return res.status(200).send({ message: "success!" });
  }
}

// Delete
async function deleteFood(req, res) {
  await models.menu.destroy({ where: { food_name: req.params.food_name } });
  return res.status(200).send({ message: "success!" });
}

module.exports = {
  getFood,
  addFood,
  updateFood,
  deleteFood,
};
