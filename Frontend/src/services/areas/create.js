import API_URL from '../../constants/api'
 export default function createUser(user){
    return fetch(API_URL.AREAS_POST,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response=> response.json())
 }