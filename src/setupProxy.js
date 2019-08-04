const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        proxy("/posts", {
            target: "https://medium.com",
            changeOrigin: true,
            onProxyReq(proxyReq) {
                if (proxyReq.getHeader("origin")) {
                    proxyReq.setHeader("origin", "https://medium.com")
                }
            },
            pathRewrite: { "^/posts": "" },
            logLevel: "debug"
        })
    )
}
