import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue--projects-default-rtdb.firebaseio.com'
})

export default journalApi