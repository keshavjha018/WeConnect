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

//Login
router.post("/login", async(req,res)=>{
    try {
        //verify email
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("User not found !");

        //verify pass
        const validPass = await bcrypt.compare(req.body.password, user.password);
        !validPass && res.status(400).json("Wrong Password !");

        //if valid
        res.status(200).json(user);

    }catch(e) {console.log(e)}
})

module.exports = router;