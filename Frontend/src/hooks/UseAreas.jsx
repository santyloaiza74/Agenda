import React,{useState,useEffect} from 'react'
import getAllAreas from '../services/areas/getAll'

function UseAreas(){
  const [areas,setUsers]= useState([])
  const [loading,setLoading]= useState(false)
  useEffect(() => {
    setLoading(true)
    getAllAreas().then(data=> {
      const {areas}= data
      console.log(data)
      if(areas){
        setUsers(areas)
      }
    })
    .finally(()=>{
      setLoading(false)
    })
  }, [])
  return {areas,loading}
}
export default UseAreas