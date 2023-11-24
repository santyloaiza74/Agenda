import API_URL from '../../constants/api'
 export default function deleteUser(id){
    return fetch(`${API_URL.USER_POST}/${id}`,{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
    })
    .then(response=> response.json())
 }