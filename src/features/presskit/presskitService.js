import axios from 'axios'

const API_URL = 'https://cute-jade-drill-sock.cyclic.cloud/api/v1/'
// cual es el link para el CRUD de presskit

const crearPresskit = async (presskitData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, presskitData, config)
  return response.data
}

const deletePresskit = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.delete(API_URL, config)
  return response.data
}

const getPresskit = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

const presskitService = {
  crearPresskit,
  getPresskit,
  deletePresskit
}

export default presskitService
