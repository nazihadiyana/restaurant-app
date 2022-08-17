const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const {
  getFood,
  addFood,
  updateFood,
  deleteFood,
} = require("./controllers/food.controller");
const { createUser, getUser } = require("./controllers/user.controller");
const {
  listOrder,
  insertOrder,
  updateOrder,
  deleteOrder,
} = require("./controllers/order.controller");

app.use(cors());
app.use(express.json());

// Food or Menu
app.get("/api/food", getFood);
app.post("/api/food/add", addFood);
app.put("/api/food/update/:food_name", updateFood);
app.delete("/api/food/delete/:food_name", deleteFood);

// Users
app.post("/api/user", createUser);
app.post("/api/user/login", getUser);

// order
app.get("/api/order", listOrder);
app.post("/api/order/add", insertOrder);
app.put("/api/order/update/:order_list", updateOrder);
app.delete("api/order/delete/:order_list", deleteOrder);

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
