const path = require('path')
const axios = require('axios')

const resolve = function (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  devServer: {
    before (app) {
      app.get('/app/category', function (req, res, next) {
        const url = 'https://web-drcn.hispace.dbankcloud.cn/uowap/index'

        axios.get(url, {
          params: req.query
        }).then((response) => {
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
      .set('base', resolve('src/base'))
  }
}
