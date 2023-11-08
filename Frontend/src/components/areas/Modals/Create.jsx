import React, { useState, useEffect } from 'react'
import { Modal, Form, Button, Alert } from 'react-bootstrap'
import createArea from '../../../services/areas/create'

function Create({ show, onClose }) {
    const [showAlert, setShowAlert] = useState(false)
    const [area, setArea] = useState({
        code: '',
        name: '',
        observations: '',
        status: true
    })
    const handleClose = () => {
        onClose(area)
        location.reload()
    }
    const handleSubmit = async () => {
        try {
            const response = await createArea(area)
            setShowAlert(true)
            setArea({
                code: '',
                name: '',
                observations: '',
                status: true
            })
            setTimeout(() => {
                setShowAlert(false)
            }, 2500)
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (event) => {
        const { name, value } = event.target
        setArea((storedArea) => {
            return {
                ...storedArea,
                [name]: value
            }
        })
    }
    const handleChangeCheckBox = (event) => {
        const { name, checked } = event.target
        setUser({ ...area, [name]: checked })
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    Add new Area
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Code</Form.Label>
                        <Form.Control type='text' placeholder='Code' name='code' onChange={handleChange} value={area.code}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Name' name='name' onChange={handleChange} value={area.name}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Observations</Form.Label>
                        <Form.Control type='text' placeholder='observations' name='observations' onChange={handleChange} value={area.observations}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Check type='checkbox' name='status' label='Activo' onChange={handleChangeCheckBox} checked={area.status}></Form.Check>
                    </Form.Group>
                </Form>
                {showAlert && <Alert variant='success'>Area created!</Alert>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={handleClose}>Close</Button>
                <Button variant='primary' onClick={handleSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default Create