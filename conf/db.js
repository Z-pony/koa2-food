const env = process.env.NODE_ENV; // 获取环境变量

// 配置
let MYSQL_CONF,
    REDIS_CONF;

if (env === 'dev') {

    // mysql
    MYSQL_CONF={
        'host': 'localhost',
        'user': 'root',
        'password': '12345678',
        'database': 'food-city'
    };

    // redis
    REDIS_CONF={
        'port': '6379',
        'host': '127.0.0.1'
    };

}

if (env === 'production') {

    // 暂时没有服务器，使用本地的来模拟
    // mysql
    MYSQL_CONF={
        'host': 'localhost',
        'user': 'root',
        'password': '12345678',
        'database': 'food-city'
    };

    // redis
    REDIS_CONF={
        'port': '6379',
        'host': '127.0.0.1'
    };

}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
};
