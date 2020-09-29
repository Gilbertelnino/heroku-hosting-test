const express = require("express");
const Blogs = require("./Blogs");
const router = express.Router();

router.post("/post/create", async (req, res) => {
  const post = new Blogs({
    title: req.body.title,
    content: req.body.content,
  });

  try {
    await post.save();
  } catch (error) {
    console.log(error);
  }
});

router.get("/posts", async (req, res) => {
  try {
    const posts = await Blogs.find();

    if (posts.length === 0) {
      res.json({
        status: 404,
        message: "not articles yes",
      });
    } else {
      res.json({
        status: 200,
        message: "post fetched successfully",
        data: posts,
      });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
