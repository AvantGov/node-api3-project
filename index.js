// code away!
const express = require("express")
const logger = require("./middleware/logger")

const server = express()
const port = 4000

server.use(express.json())



server.use(logger())

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})