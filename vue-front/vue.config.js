const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  api_url : "http://192.168.1.24:5000/"
})
