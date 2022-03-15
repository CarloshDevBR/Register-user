import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Container, People, BoxOrigin } from './styles.js'

import { List } from '../../components/List/'
import { Button } from '../../components/Button/'
import { Title } from '../../components/Title/'
import { Box } from '../../components/Container/'

import Avatar from '../../assets/avatar.svg'

import axios from 'axios'

function Users() {
  const [user, setUser] = useState([])
  const history = useHistory()
  
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
  
  function goBack() {
    history.push("/")
  }
  
  return (
     <Container>
      <People src={Avatar} alt='people' />
      
      <Box isBlur={true}>
        <Title>Users</Title>
        
        <List users={user} onClick={removeItem} />
        
        <Button onClick={goBack} back={true}>Back</Button>
      </Box>
    </Container>
  )
}

export default Users