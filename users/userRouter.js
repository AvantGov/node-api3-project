const express = require('express');
const users = require("./userDb")
const posts = require('../posts/postDb')
const { validatePost, validateUser, validateUserId } = require('../middleware/userMW');
const { validatePostId } = require('../middleware/postMW')
const { restart } = require('nodemon');


const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  users.get()
    .then((response) => {
      res.status(200).json(response)
    })
    .catch((error) => {
      console.log(error)
      res.status(401).json({ message: "users unavailable" })
    })
});

router.get('/:id', validateUserId(), (req, res) => {
  res.status(200).json(req.user) 
});

router.get('/:id/posts', validateUserId(), (req, res) => {
  if (!req.user) {
    res.status(404).json({ message: 'user not found' })
  }

  users.getUserPosts(req.params.id)
    .then((response) => {{
      res.status(200).json(response)
    }})
    .catch((error) => {
      console.log(error)
      res.status(401).json({ message: 'user posts unavailable' })

    })

});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});



module.exports = router;
