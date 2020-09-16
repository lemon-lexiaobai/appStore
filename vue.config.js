const path = require('path')
const axios = require('axios')

const resolve = function (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    before (app) {
      app.get('/app/category', function (req, res, next) {
        const url = 'https://web-drcn.hispace.dbankcloud.cn/uowap/index?method=internal.getTabDetail&serviceType=20&reqPageNum=1&uri=b2b4752f0a524fe5ad900870f88c11ed&maxResults=25&zone=&locale=zh_CN'

        axios.get(url).then((response) => {
          res.json(response.data)
        }).catch((e) => {
          console.log(e)
        })
      })
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
  }
}
