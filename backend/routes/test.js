const { sendOk } = require("../controllers/test")
const router = require("express").Router()

router.get("/", sendOk)

module.exports = router