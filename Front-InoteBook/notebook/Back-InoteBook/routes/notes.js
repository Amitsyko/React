const express = require("express");
const router = express.Router()

router.get("/", (req, res) =>{
    res.send("Hey i am Notes")
})

module.exports = router;
