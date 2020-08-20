import axios from "axios";

axios.defaults.headers["Accept"] = "application/vnd.user-backend.v1";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Cache-Control"] = "no-cache";

const ROOT_API_URL = process.env.REACT_APP_REST_API_LOCATION || 'http://localhost:3001/api';

const constructUrlEndPoint = api => `${ROOT_API_URL}/${api}`;

const formatStringUrl = (...args) => {
  let i = 1;
  const str = args[0];
  return str.replace(/\{\}/g, () => args[i++]); // eslint-disable-line
};

const prettifyEndpoint = (api, ...args) =>
  formatStringUrl(constructUrlEndPoint(api), ...args);

const processFormData = (objectKey, fileKey, data)=> {
  if (!data[fileKey]) {
    return  {[objectKey]: data};
  }
  const form = new FormData();
  Object.keys(data).map((key) => form.append([`${objectKey}[${key}]`], data[key]))
  return form;
}


let accessToken = null;

const setToken = (token, onInvalidToken) => {
  accessToken = token;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  axios.defaults.withCredentials = true;
  axios.interceptors.response.use(null, function (err) {
    if (err.response && err.response.status === 401) {
      accessToken = null;
      if(onInvalidToken) {
        onInvalidToken(err)
      }
    }
    return Promise.reject(err);
  });
}

const getToken = ()=> {
  return accessToken;
}

const getReq = (url, params={})=> {
  return axios.get(prettifyEndpoint(url), {params})
}

const postReq = (url, params, dataKeys=null)=> {
  if (!dataKeys || dataKeys.length === 0) {
    return axios.post(prettifyEndpoint(url), {...params})
  } else {
    return axios.post(prettifyEndpoint(url), processFormData(dataKeys[0], dataKeys[1], params));
  }
}

const putReq = (url, params, dataKeys=null)=> {
  if (!dataKeys || dataKeys.length === 0) {
    return axios.put(prettifyEndpoint(url), {...params})
  } else {
    return axios.put(prettifyEndpoint(url), processFormData(dataKeys[0], dataKeys[1], params));
  }
}

const deleteReq = (url, data)=> {
  return axios.put(prettifyEndpoint(url), {data})
}

export default {
  get: getReq,
  post: postReq,
  put: putReq,
  delete: deleteReq,
  ROOT_API_URL,
  setToken,
  getToken
}
