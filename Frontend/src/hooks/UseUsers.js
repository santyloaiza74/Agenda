import React,{useState,useEffect} from 'react'
import getAllUsers from '../services/users/getAll.js'
import deleteUser from '../services/users/delete.js'

function UseUsers(){
  const [users,setUsers]= useState([])
  const [loading,setLoading]= useState(false)
  useEffect(() => {
    setLoading(true)
    getAllUsers().then(data=> {
      const {users}= data
      console.log(data)
      if(users){
        setUsers(users)
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])
  const newUser=(user)=>{
    setUsers([...users,user])

    console.log(user)
  }
  const deleteUser=(id)=>{
    setUsers(users.filter((currentUser)=>currentUser.id != id))
    console.log(id)
  }
  return {users,loading,newUser,deleteUser}
}
export default UseUsers
