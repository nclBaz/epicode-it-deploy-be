import jsonServer from "json-server"
import jsonServerAuth from "json-server-auth"

const server = jsonServer.create()
const router = jsonServer.router("db.json") // crea gli endpoint a partire dal file db.json
const middlewares = jsonServer.defaults()

const port = process.env.PORT || 3001

server.db = router.db

server.use(middlewares) // Non dimenticare i middleware di default, altrimenti FE & BE non sarebbero in grado di comunicare ( in + abbiamo anche un logger e altre funzionalità extra nice to have)
server.use(jsonServerAuth)
server.use(router)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
