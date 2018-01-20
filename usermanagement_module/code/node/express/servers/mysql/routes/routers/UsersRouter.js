var express = require("express");
var router = express.Router();
var controller = require("../../controllers/UserController")

router.get("/getall", controller.get_all_Users);
router.post("/saveuser",controller.save_user_details);
router.post("/deleteuser",controller.delete_user)

module.exports = router;
