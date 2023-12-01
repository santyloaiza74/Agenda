import React, { useState, useEffect } from 'react'
import { Alert, Button, Form,Modal } from 'react-bootstrap'
import getUser from '../../../services/users/getOne'
import useAreas from '../../../hooks/UseAreas'
import updateUser from '../../../services/users/update'

function Edit({ idUser, show, onClose }) {
    const { areas } = useAreas()
    const [showAlert, setshowAlert] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        status: true,
        areaId: 0
    })
    useEffect(() => {
        (async () => {
            if (idUser == 0) return
            try {
                const response = await getUser(idUser)
                setUser(response.user)
            } catch (error) {
                onClose()
            }
        })()
    }, [idUser])
    const handleClose=()=>{
        onClose(user)
    }
    const handleSubmit = async () => {
        try {
            const response = await updateUser(user)
            setshowAlert(true)
            setUser({
                name: "",
                email: "",
                password: "",
                status: true,
                areaId: 0
            })
            setTimeout(() => {
                setshowAlert(false)
                onClose()
            }, 2500);
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange=(event)=>{
        const {name,value}= event.target
        setUser((storedUser)=>{
            return {
                ...storedUser,
                [name]:value
            }
        })
    }
    const handleChangeCheckBox=(event)=>{
        const [name,checked]= event.target
        setUser({...user, [name]:checked})
    }
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Update User
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='User name' name='name' onChange={handleChange} value={user.name}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='User@gmail.com' name='email' onChange={handleChange} value={user.email}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type='password' placeholder='*******' name='password' onChange={handleChange} value={user.password}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Check type='checkbox' name='status' label='Activo' onChange={handleChangeCheckBox} checked={user.status}></Form.Check>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Area</Form.Label>
                        <Form.Select name='areaId' onChange={handleChange} value={user.areaId}>
                            <option value="0">Select an option</option>
                            {areas.map(({id,name})=>(
                                <option value={name} key={id}>{name}</option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Form>
                {showAlert && <Alert variant='success'>Userupdate</Alert>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Close</Button>
                <Button variant='primary' onClick={handleSubmit}>Update</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Edit 