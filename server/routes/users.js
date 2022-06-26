const router = require("express").Router();
const User = require("../models/user.schema");
const bcrypt = require("bcrypt");

//create new user
router.post("/register", async(req,res)=>{

    if(req.body.password !== req.body.rePassword) {return res.status(400).json("Password Mismatch")};

    let pass = await bcrypt.hash(req.body.password, 10); // Hashing the Password

    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password:pass,
    })

    try{
        const newUser = await user.save(); //save in db
        res.status(200).json(newUser);
    }catch(e){return res.status(500).json(e)}
})

//update user
router.put("/:id", async(req,res)=>{

    //check if user is updating his own details
    if(req.body.userId === req.params.id || req.user.isAdmin){

        //if user is changing password
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            }catch(e){return res.status(500).json(e)}
        }

        //other updates
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set:req.body});  //Update all inputs inside body
            res.status(200).json("Account has been updated !");
        }catch(e){return res.status(500).json(e)}
    }else{
        res.status(403).json("You can update only your own account !");
    }
});

//delete a user
router.delete("/:id", async(req,res)=>{

    //check if user is deleting his own details
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id);  //Update all inputs inside body
            res.status(200).json("Account has been deleted !");

        }catch(e){return res.status(500).json(e)}
    }else{
        res.status(403).json("You can delete only your own account !");
    }
});

//get a user

router.get("/", async(req,res)=>{
    //can get user via id OR username
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user = userId 
        ? await User.findById(userId)                          // if userId is in url => get by id
        : await User.findOne({username: username});          // else get via username

        // const {password, updatedAt, ...other} = user._doc;       //carry all details as object
        res.status(200).json(user);                             //sends other details only

    }catch(e){res.status(500).json(e)}
});

//follow a user
router.put("/:id/follow", async(req,res)=>{

    //check if user is following himself
    if(req.body.userId !== req.params.id){

        try{
            const user = await User.findById(req.params.id);        //user to be followed
            const currentUser = await User.findById(req.body.userId);   //user who will follow
            
            //if already not following
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers:req.body.userId}});  //update follower array
                await currentUser.updateOne({$push:{following:req.params.id}});  //update following array
                res.status(200).json("User has been Followed !")
            }
            else{
                res.status(403).json("You already follow this User");
            }
        }
        catch(e){
            return res.status(500).json(e)
        }
    }else{
        res.status(403).json("You can't follow yourself !");
    }
});

//unfollow a user
router.put("/:id/unfollow", async(req,res)=>{

    //check if user is unfollowing himself
    if(req.body.userId !== req.params.id){

        try{
            const user = await User.findById(req.params.id);        //user to be followed
            const currentUser = await User.findById(req.body.userId);   //user who will follow
            
            //if following then only => unfollow
            if(user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers:req.body.userId}});  //update follower array
                await currentUser.updateOne({$pull:{following:req.params.id}});  //update following array
                res.status(200).json("User has been unfollowed !")
            }
            else{
                res.status(403).json("You do not follow this User");
            }
        }
        catch(e){
            return res.status(500).json(e)
        }
    }else{
        res.status(403).json("You can't follow/unfollow yourself !");
    }
});


module.exports = router;