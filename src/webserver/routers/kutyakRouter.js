const controller = require("../controllers/kutyakController");
const router = require('express').Router();

router.get("/", controller.findAll);
router.post("/", controller.create);

module.exports = router;