var express = require('express');
var router = express.Router();
var controller = require("../../controllers/AuthorityController");

router.get("/getallauthority",controller.get_all_Authority);
router.post("/saveAuthority",controller.save_Authority);
router.delete('/deleteAuthority',controller.delete_Authority);
 module.exports = router;
