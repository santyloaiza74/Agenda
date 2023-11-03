import React,{useState,useEffect} from 'react'
import { Modal } from 'react-bootstrap'
import createUser from '../../../services/users/create'

function Create({show, onClose}){
    const [user, setUser]= useState({
        name: '',
        email: '',
        password: '',
        status: true
    })
    const handleClose=()=>{
        onClose(user)
    }
    const handleSubmit=async()=>{
        try{
            const response = await createUser(user)
            console.log(response)
        }catch(error){
            console.log(error)
        }
    }
    const handleChange=(event)=>{
        const {name,value}= event.target
        setUser((storedUser)=>{
            return {
                ...storedUser,
                [name]: value
            }
        })
    }
    const handleChangeCheckBox=(event)=>{
        const {name,checked}= event.target
        setUser({...user,[name]:checked})
    }
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>

            </Modal.Header>
        </Modal>
    )
}
export default Create