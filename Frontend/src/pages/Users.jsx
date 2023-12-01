import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import List from '../components/users/List'
import Create from '../components/users/Modals/Create'
import Edit from '../components/users/Modals/Edit'
function Users() {
    const [showUserModal,setShowUserModal]=useState(false)
    const [showEditUserModal,setShowEditUserModal]=useState(false)
    const [newUser,setNewUser]=useState({})
    const [editUser, setEditUser]=useState(0)
    const [editedUser,setEditedUser]=useState({})
    const closeModal=(user)=>{
        if(user.id){
            console.log('User identified')
            setNewUser(user)
        }
        setNewUser(user)
        setShowUserModal(false)
    }
    const closeEditModal=(user)=>{
        setEditedUser(user)
        setShowEditUserModal(false)
    }
    const handleClickEdit=(id)=>{
        setEditUser(id)
        setShowEditUserModal(true)
    }
    return (
        <Container>
            <Row>
                <Col xs='12'>
                    <h1>Users</h1>
                </Col>
            </Row>
            <Row>
                <Col xz='12' className='d-flex justify-content-end my-2'>
                    <Button variant='primary' onClick={()=> setShowUserModal(true)}>Create</Button>
                    <Create show={showUserModal} onClose={closeModal}></Create>
                </Col>
                <Col xs='12'>
                    <Edit idUser={editUser} show={showEditUserModal} onClose={closeEditModal}></Edit>
                    <List addUser={newUser} editUser={editUser} onclickEdit={handleClickEdit}></List>
                </Col>
            </Row>
        </Container>
    )
}

export default Users