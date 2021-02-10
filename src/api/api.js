import axios from 'axios'
import io from 'socket.io'
export function testAxios () {
  return axios({
    method: 'get',
    url: `${process.env.VUE_APP_BASE_URL}`
  })
}
export function testIo () {
  return io()
}
