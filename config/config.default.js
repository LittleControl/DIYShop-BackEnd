exports.keys = '<littlecontrol@qq.com>'
exports.mongoose = {
    client: {
        url: 'mongodb://127.0.0.1/diy_shop',
        options: {},
        plugins: []
        // mongoose global plugins, expected a function or an array of function and options
        // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
    }
}
exports.security = {
    csrf: {
        enable: false
    }
}

exports.cors = {
    credentials: true,
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
}
