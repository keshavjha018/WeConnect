const router = require("express").Router();
const Post = require("../models/post.schema");
const User = require("../models/user.schema");

//create a post

router.post("/", async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(e){return res.status(500).json(e)}
})

//edit or update a post

router.put("/:id", async(req,res)=>{

    const post = await Post.findById(req.params.id);
    //check if post belongs to current user
    if(post.userId === req.body.userId){
        try{
            await post.updateOne({$set: req.body})
            res.status(200).json("Post has been updated !");
        }
        catch(e){return res.status(500).json(e)}
    }
    else{
        res.status(500).json("You can't edit other user's post !")
    }
});

//delete a post
router.delete("/:id", async(req,res)=>{

    const post = await Post.findById(req.params.id);
    //check if post belongs to current user
    if(post.userId === req.body.userId){
        try{
            await post.deleteOne();
            res.status(200).json("Post has been deleted !");
        }
        catch(e){return res.status(500).json(e)}
    }
    else{
        res.status(500).json("You can't delete other's post !")
    }
});

//like-dislike a post
router.put("/:id/like", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        //if already not liked
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes: req.body.userId}});
            res.status(200).json("Post has been liked !");
        }
        //if already liked => dislike
        else{
            await post.updateOne({$pull:{likes: req.body.userId}});
            res.status(200).json("Post has been disliked !");
        }
    }
    catch(e){return res.status(500).json(e)}
});

// get a post
router.get("/:id", async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(e){return res.status(500).json(e)}
});

//get all timeline post - for HOMEPAGE
//two get may create confusion for server => /timeline alone cant be used
router.get("/timeline/:userId", async(req,res)=>{
    try{
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({userId: req.params.userId});   //find by userid of post
        //posts of followings
        const otherPosts = await Promise.all(
            currentUser.following.map((friendId)=>{
                return Post.find({userId:friendId});
            })
        );
        //concatinate both posts
        res.status(200).json(userPosts.concat(...otherPosts));
    }
    catch(e){return res.status(500).json(e)}
});


module.exports = router;