import request from '../utils/request'

export function getModels(name) {
  return request({
    url: `/data/${name}.json`,
    method: 'get',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}

export function getModelProfile(id) {
  return request({
    url: `/data/models/${id}.json`,
    method: 'get',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
