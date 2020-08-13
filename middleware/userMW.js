//custom middleware
const users = require('../users/userDb')

function validateUserId() {
    return (req, res, next) => {
		users.getById(req.params.id)
			.then((response) => {
				if (response) {
					req.user = response
					next()
				} else {
					res.status(404).json({
						message: "invalid user id",
					})
				}
			})
			.catch(next)
	}
}

function validateUser() {
    return (req, res, next) => {
        if (!req.body.name) {
            return res.status(400).json({
				message: "Missing required field",
			})
        } else if (!req.body) {
			return res.status(400).json({
				message: "Missing information in request",
			})
		} else {
            next()
        }
	}
}

function validatePost() {
    return (req, res, next) => {
        if (!req.body.text) {
            return res.status(400).json({
				message: "Missing required field",
			})
        } else if (!req.body) {
			return res.status(400).json({
				message: "Missing information in request",
			})
		} else {
            next()
        }
	}
}

module.exports = {
    validatePost,
    validateUser,
    validateUserId
}