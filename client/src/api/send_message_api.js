import axios from 'axios'

export const setDeafMessage = (message) =>{
    return axios.get('http://localhost:8004/message_postprocessing/api/v1/',
        {
            params : {'message' : message}
        }
    )
}

