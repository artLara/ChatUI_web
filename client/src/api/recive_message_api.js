import axios from 'axios'

export const getDeafMessage = () =>{
    return axios.post('http://localhost:8002/message_postprocessing/api/v1/')
}

