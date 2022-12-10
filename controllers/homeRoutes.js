const router = require('express').Router();
const { Post, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const postInfo = await Post.findAll();

    const posts = postInfo.map((post) => post.get({ plain: true }));

    
    res.render('homepage', { 
        posts
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  res.render('login');
})

module.exports = router;