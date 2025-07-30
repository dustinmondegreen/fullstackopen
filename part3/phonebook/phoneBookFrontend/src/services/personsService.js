import axios from "axios"
const baseURL = '/api/notes'

const get = () => (axios.get(baseURL).then((res) => res.data))

const post = (newPerson) => (axios.post(baseURL, newPerson))

const put = (person) => (axios.put(`${baseURL}${person.id}`, person))

const remove = (person) => (axios.delete(`${baseURL}${person.id}`).then(res => res.data))
export default {
    get,
    post,
    put,
    remove,
}