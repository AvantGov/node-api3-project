// code away!
const express = require("express")


const server = express()
const port = 4000

server.use(express.json())


server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})