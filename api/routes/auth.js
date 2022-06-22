const router = require("express").Router();
const User = require("../models/user.schema");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async(req,res)=>{
    try {
        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const user = await new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })

        //save user
        await user.save();
        res.status(200).send("User Registered");

    }catch(e) {console.log(e)}
})

module.exports = router;