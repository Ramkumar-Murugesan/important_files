var express = require('express');
var router = express.Router();
var controller = require('../../controllers/mailchimp_controller');

router.post("/create",controller.create_key);
router.put("/update",controller.update_key);
router.delete("/delete",controller.delete_key);
router.get("/findbyuserid",controller.search_key_for_update);
router.get("/findall",controller.get_all_key);

module.exports=router;