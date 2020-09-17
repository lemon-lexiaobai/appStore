import axios from 'axios'
import { commonParams } from './config'

export function getAppCategory () {
  const url = '/app/category'

  const data = Object.assign({}, commonParams, {
    uri: 'b2b4752f0a524fe5ad900870f88c11ed'
  })

  return axios.get(url, {
    params: data
  }).then(res => {
    return Promise.resolve(res.data)
  })
}
