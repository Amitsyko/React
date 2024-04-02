const express = require("express");
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');

//Create a user using POST "api/auth/createuser". No Login Required
router.post("/createuser", [
    body('name','Enter a Vaild Name').isLength({ min: 3 }),
    body('email','Enter a Vaild Email').isEmail(),
    body('password','Password must be 5 Characters').isLength({ min: 5 }),
], async(req, res) => {
    //if there are errors, return bad request and the errors--
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }
    //Check wheather the user with this email exits already--
try{
    let user = await User.findOne({email: req.body.email})
    if(user){
        return res.status(400).json({error: "Sorry User is already exit for this email"})
    }
    user = await Userd.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.status(201).json(user)
} catch(error){
    console.error(error.message);
    res.status(500).send("Some Error Occured");
}
})

module.exports = router;