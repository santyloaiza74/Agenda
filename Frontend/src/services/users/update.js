import API_URL from '../../constants/api'
 export default function updateUser(user){
    return fetch(`${API_URL.USER_POST}/${user.id}`,{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response=> response.json())
 }