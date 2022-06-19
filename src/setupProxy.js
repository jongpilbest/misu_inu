const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
 app.use(
  '/api',
  createProxyMiddleware({
   target: 'http://10.93.194.182:5000',
   changeOrigin: true,
  })
 );
};