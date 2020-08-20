import Request from './request';

export const login = ({ username, password})=> {
  return Request.post('signin', {auth: { email: username, password }})
}

export const getUser = ()=> {
  return Request.get('users/me')
}

export const getCounter = (type)=> {
  return Request.get(`count/${type}`)
}

export const getDetailStats = (type)=> {
  const url = type ? `detail/${type}` : 'details/'
  return Request.get(url)
}


export const getUnknownDevices =()=> {
  return Request.get('reports/unknowndevices')
}