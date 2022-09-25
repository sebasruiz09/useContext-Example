import React, { useContext } from 'react'
import UserContext from '../../../Contexts/UserContext/UserContext'
import { UserForm } from './Layout/Form/Form'

export default function Home() {

  const user = useContext(UserContext);
  console.log(user);

  return (
    <div>
      <UserForm />
    </div>
  )
}
