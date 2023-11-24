import API_URL from './../../constants/api'

export default function getUser(id){
    return fetch(`${API_URL.USER_GET}/${id}`).then((response)=> response.json())
}