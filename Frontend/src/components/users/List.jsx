import React, { useEffect } from 'react'
import { Spinner, Table,Button } from 'react-bootstrap'
import UseUsers from '../../hooks/UseUsers'

function List({ addUser, deletUser, onclickEdit, onclickDelte } = {
    deletUser: 0,
    addUser: { id: 0, name: '', email: '',password: '', status: false, areaid: 0 },
    onclickEdit: (id) => { },
    onclickDelte: (id) => { }
}) {
    const { newUser, users, loading, deleteUser } = UseUsers()
    useEffect(() => {
        if(addUser)newUser(addUser)
    }, [addUser])
    useEffect(() => {
        if(deletUser>0)deleteUser(deletUser)
    }, [deletUser])
    if (loading) return <Spinner />
    return (
        <Table striped bordered hover>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Options</th>
            </thead>
            <tbody>
                {users.map(({ id, name, email, status}) => (
                    <tr key={`user-row-${id}`}>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{status ? 'Active' : 'Inactive'}</td>
                        <td><Button variant='primary'onClick={()=>onclickEdit(id)}>Edit</Button>
                        <a> </a>
                        <Button variant='danger' onClick={()=>onclickDelte(id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}
export default List