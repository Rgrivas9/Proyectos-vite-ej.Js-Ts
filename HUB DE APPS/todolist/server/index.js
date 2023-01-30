const jsonserver = require("json-server")
const server = jsonserver.create()
const router = jsonserver.router("./data.json")
const middlewares = jsonserver.defaults()

server.use(middlewares)
server.use(router)

server.listen(8088, ()=>{
    console.log("Server running on http://localhost:8088")
})