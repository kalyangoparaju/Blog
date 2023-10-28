const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userContoller");

//router object
const router = express.Router();

// GET ALL USERS || GET
router.get("https://blog-ten-ashen-70.vercel.app/all-users", getAllUsers);

// CREATE USER || POST
router.post("https://blog-ten-ashen-70.vercel.app/register", registerController);

//LOGIN || POST
router.post("https://blog-ten-ashen-70.vercel.app/login", loginController);

module.exports = router;
