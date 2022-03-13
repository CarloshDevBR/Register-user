const cors = require("cors")
const express = require("express")

const port = 3001
const app = express()

app.use(express.json())
app.use(cors())

const checkIndexId = (req, res, next) => {
  const { id } = req.params
  const index = users.findIndex(user => user.id == id)
  
  if(index < 0){
  		 return res.status(404).json({ message: "user not found 404"})
  		}
  		
  	req.userIndex = index
	 req.userId = id
	 
	 next()
}

const users = []

app.get("/users/", (req, res) => {	 
	 return res.json(users) 
})

app.post("/users/", (req, res) => {
	 const { name, age } = req.body
	 const user = { id: Math.random(), name, age }
	 
	 users.push(user)
	 
	 return res.status(201).json(user)
})

app.put("/users/:id", checkIndexId, (req, res) => {
  const index = req.userIndex
  const { name, age } = req.body
  const id = req.userId
  const updateUser = { id, name, age }
  		
  	users[index] = updateUser
  		
  	return res.json(updateUser)
})

app.delete("/users/:id", checkIndexId, (req, res) => {
  const index = req.userIndex
  		
  	users.splice(index,1)
  		
  	return res.status(204).json()
})

app.listen(port, () => {
  console.log(`Aplicação no ar na porta ${port}`)
})
