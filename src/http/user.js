import http from './index'

// 登录
export const login = (data) => {
  return http.post('/user/login', data)
}

// 查询心情
export const listMood = (data) => {
  return http.post('/mood-records/list', data)
}

// 添加心情
export const addMood = (data) => {
  return http.post('/mood-records/add', data)
}

// 查询自我探知
export const listSelf = (data) => {
  return http.post('/self-discovery/list', data)
}

// 新增自我探知
export const addSelf = (data) => {
  return http.post('/self-discovery/add', data)
}

// 查新用户信息
export const listUserInfo = (data) => {
  return http.post('/user/list', data)
}

// 更新用户信息
export const updateUser = (data) => {
  return http.post('/user/update', data)
}

// 注册用户
export const register = (data) => {
  return http.post('/user/register', data)
}

// 查询所有用户列表
export const userAll = () => {
  return http.post('/user/list', { pageNumber: 1, pageSize: 10000 })
}

// 发送信件
export const sendLetter = (data) => {
  return http.post('/correspondence/add', data)
}

// 根据当前用户id查询已发送的所有信件
export const listsendLetterAllByUserId = (data) => {
  return http.post('/correspondence/list', data)
}

// 根据当前用户id查询收件
export const listAddresseeListByUserId = (data) => {
  return http.post('/correspondence/list', data)
}

// 拒收信件
export const deleteLetter = (data) => {
  return http.post('/correspondence/delete', data)
}

// 上传资源
export const addResource = (data) => {
  return http.post('/community-resources/add', data)
}

// 分页查询已上传资源
export const listResource = (data) => {
  return http.post('/community-resources/list', data)
}
