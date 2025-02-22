import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getData = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const addData = newObject => {
  console.log()
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const deleteData = userId => {
  console.log()
  const request = axios.delete(`${baseUrl}/${userId}`)
  return request.then(response => response.data)
}

export default { getData, addData, deleteData }
