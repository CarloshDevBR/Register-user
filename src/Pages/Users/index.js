import React, { useState, useEffect } from 'react'
import { Container, People, BoxOrigin, Title, H1 } from './styles.js'

import { List } from '../../components/List'
import { BackButton } from '../../components/BackButton/'

import Avatar from '../../assets/avatar.svg'

import axios from 'axios'

function Users() {
  const [user, setUser] = useState([])

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
      <People src={Avatar} alt='people' />
      
      <BoxOrigin>
        <Title>
            <H1>Users</H1>
        </Title>
        
        <List users={user} onClick={removeItem} />
        
        <BackButton />
        
      </BoxOrigin>
    </Container>
  )
}

export default Users