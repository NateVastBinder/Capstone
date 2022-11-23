import axios from 'axios'


const baseUrl = 'http://localhost:8080'

export const getUserByEmail = async (email) => {

    return await axios.get(baseUrl + `getUserByEmail/${email}`)

}

