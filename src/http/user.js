import http from './index'

export const login = (data) => {
  return http.post('/user/login', data)
}

export const listMood = (data) => {
  return http.post('/mood-records/list', data)
}

export const addMood = (data) => {
  return http.post('/mood-records/add', data)
}

export const listSelf = (data) => {
  return http.post('/self-discovery/list', data)
}

export const addSelf = (data) => {
  return http.post('/self-discovery/add', data)
}

export const listUserInfo = (data) => {
  return http.post('/user/list', data)
}

export const updateUser = (data) => {
  return http.post('/user/update', data)
}

export const register = (data) => {
  return http.post('/user/register', data)
}
