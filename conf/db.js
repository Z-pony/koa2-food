const env = process.env.NODE_ENV; // 获取环境变量

// 配置
let MYSQL_CONF,
  REDIS_CONF;

if (env === 'dev'){

  // mysql
  MYSQL_CONF = {
    'host': 'localhost',
    'user': 'root',
    'password': '12345678',
    'database': 'food_city'
  };

  // redis
  REDIS_CONF = {
    'port': '6379',
    'host': '127.0.0.1'
  };
}

if (env === 'production'){

  // msql
  MYSQL_CONF = {
    'host': 'localhost',
    'user': 'root',
    'port': '3306',
    'password': '12345678',
    'database': 'food_city'
  };

  // redis
  REDIS_CONF = {
    'port': '6379',
    'host': '127.0.0.1'
  };
}

module.exports = {
  MYSQL_CONF,
  REDIS_CONF
};
