const posts = require('../posts/postDb')


const validatePostId = () => {
    return (req, res, next) => {
        posts.getById(req.user.id)
            .then((response) => {
                console.log('look here',response)
                req.posts = response
                next()
            })
            .catch((error) => {
                console.log('get post by id promise error', error)
                res.status(404).json({ message: 'post unavailable'})
            })
    }
}

module.exports = {
    validatePostId
}