import fetch from 'isomorphic-fetch'
import config from 'config'

// do NOT send Authorization header to urls
const allowedRequests = [
  {
    url: 'login',
    method: 'post'
  }
]

const isAuthRequest = (url, method) =>
  allowedRequests.find(
    rq =>
      rq.method && rq.method !== method
        ? false
        : rq.url === url
  )

const prepareRequestBody = (body, jsonRequest) => {
  if (jsonRequest) {
    return JSON.stringify(body)
  } else {
    let formDataBody = new FormData()
    Object.keys(body).forEach((key) => {
      formDataBody.append(key, body[key])
    })

    return formDataBody
  }
}

const prepareRequestHeaders = ({headers = {}, method}, jsonRequest, url) => {
  const token = localStorage.getItem('token')

  if (token && !isAuthRequest(url, method)) {
    headers['Authorization'] = `JWT ${token}`
  }

  if (jsonRequest) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    }
  }

  return headers
}

export default function *(url, data, jsonRequest = true) {
  data.body = prepareRequestBody(data.body, jsonRequest)
  data.headers = prepareRequestHeaders(data, jsonRequest, url)

  const response = yield fetch(config.api.baseUrl + url, data)

  const responseBody = yield response.json()

  if (!response.ok) {
    throw responseBody
  }

  return responseBody
}
