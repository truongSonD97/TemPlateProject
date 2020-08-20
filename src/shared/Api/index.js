import request from './request';
import * as api from './endpoints';

export default {
  get: request.get,
  post: request.post,
  put: request.put,
  delete: request.delete,
  callapi: api,
  request
}
