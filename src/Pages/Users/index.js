import React, { useState, useRef, useEffect } from 'react'
import { Container, BoxImg, People, BoxOrigin, Title, H1 } from './styles.js'

import { List } from '../../components/List'
import { Button } from '../../components/Button/'
import { Input } from '../../components/Input/'

import Avatar from '../../assets/avatar.svg'

import axios from 'axios'

function Users() {
  const [user, setUser] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  
  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value })
    setUser([...user, newUser])
  }

  useEffect(() => {
    async function fetchUsers(){
      const { data } = await axios.get("http://localhost:3001/users")
    
      setUser(data)
    }
    
    fetchUsers()
  }, [])

  async function removeItem(id) {
    const newUser = user.filter(user => user.id !== id)
    
    setUser(newUser)
    
    await axios.delete(`http://localhost:3001/users/${id}`)
  }
  
  return (
     <Container>
      <BoxImg>
        <People src={Avatar} alt='people' />
      </BoxImg>
      
      <BoxOrigin>
        <Title>
            <H1>Users</H1>
        </Title>
  
        <Input Name={inputName} Age={inputAge} />
  
        <Button onClick={addNewUser} />
        
        <List users={user} onClick={removeItem} />
      </BoxOrigin>
    </Container>
  )
}

export default Users