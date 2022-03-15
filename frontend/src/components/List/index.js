import React from 'react'
import { Ul, Li, Trash } from './styles.js'
import TrashImg from '../../assets/trash.png'

export const List = ({ users, onClick }) => {
 return(
   <Ul>
      { users.map(item => {
      return <Li key={item.id}>
               <p>{item.name}</p>
               <p>{item.age}</p>
               <Trash src={TrashImg} alt="trash" onClick={() => onClick(item.id)} />
             </Li>
      }) }
    </Ul>
  )
}