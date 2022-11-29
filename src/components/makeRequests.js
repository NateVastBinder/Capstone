import axios from 'axios'


const baseUrl = 'http://localhost:8080'

export const getUserByEmail = async (email) => {

    axios.get(baseUrl + `getUserByEmail/${email}`)
        .then((response) => {
            return response.data
        })
        .catch((e) => {
          console.log(e)
          return null
        })
    }

