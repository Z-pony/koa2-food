const env = process.env.NODE_ENV // 获取环境变量

// 配置
let MYSQL_CONF

if(env === 'dev'){
  MYSQL_CONF={
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'food-city'
  }
}

if(env === 'production'){
  // 暂时没有服务器，使用本地的来模拟
  MYSQL_CONF={
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'food-city'
  }
}

module.exports = {
  MYSQL_CONF
}