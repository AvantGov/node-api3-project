// code away!
const express = require("express")
const logger = require("./middleware/logger")
const userRouter = require('./users/userRouter')
const postRouter = require('./posts/postRouter')
const bodyParser = require('body-parser')


const server = express()
const port = 4000

server.use(express.json())

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(userRouter)

server.use(logger())

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})