import request from '../utils/request'

export function getCarousel() {
  return request({
    url: '/data/carousel.json',
    method: 'get',
    header: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
}
