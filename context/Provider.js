import { View, Text } from 'react-native'
import React from 'react'
import MyContext from './MyContext'

export default function Provider(props) {

    const [user, setUser] = useState({
        user: null
    })

    async function setUser(user){
        setUser(user)
    }
    
  return (
    <MyContext.Provider value={{
        addUser: setUser,
        user: user
    }}>
      {props.children}
    </MyContext.Provider>
  )
}