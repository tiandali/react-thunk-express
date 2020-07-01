//const proxy=require("http-proxy-middleware");//这是之前版本的写法
const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3033", //服务端端口
      changeOrigin: true,
    })
  )
}
