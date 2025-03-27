const express = require("express");
const router = express.Router();
const {
  createCustomer,
  getCustomers,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customer-controller");

router.route("/").post(createCustomer).get(getCustomers);

router.route("/:id").put(updateCustomer).delete(deleteCustomer);

module.exports = router;
