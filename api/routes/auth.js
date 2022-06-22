const router = require("express").Router();
const User = require("../models/user.schema");

//Register
router.post("/register", async(req,res)=>{
    
    const user = await new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password 
    })

    try {
        await user.save();
        res.status(200).send("User Registered");
    }catch(e) {console.log(e)}
})

module.exports = router;