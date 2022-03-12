import React, { useState, useRef } from 'react'
import { Container, People, BoxOrigin, Title, H1 } from './styles.js'

import { Button } from '../../components/Button/'
import { Input } from '../../components/Input/'

import PeopleImg from '../../assets/people.svg'

import axios from 'axios'

function Home() {
  const [user, setUser] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  
  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", { name: inputName.current.value, age: inputAge.current.value })
    setUser([...user, newUser])
  }
  
  return (
     <Container>
      <People src={PeopleImg} alt='people' />
      
      <BoxOrigin>
        <Title>
            <H1>Hello!</H1>
        </Title>
  
        <Input Name={inputName} Age={inputAge} />
  
        <Button onClick={addNewUser} />
  
      </BoxOrigin>
    </Container>
  )
}

export default Home