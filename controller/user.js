const xss = require('xss');
const { exec, escape } = require('../db/mysql');
const { genPassword } = require('../utils/cryp');

const login = async (username, password) => {
  username = escape(username);

  // 生成加密密码
  password = genPassword(password);
  password = escape(password);
  const sql = `
        select username, realname from users where username=${username} and password=${password} and phoneNumber=${phoneNumber}
    `;
  const rows = await exec(sql);

  return rows[0] || {};
};

const regist = async (username, password, phoneNumber) => {
  password = genPassword(password);
  password = xss(password);
  const createTime = Date.now();

  const sql = `insert into users(username, password, createTime, phoneNumber) values ('${username}', '${password}', '${createTime}', '${phoneNumber}')`;
  const row = await exec(sql);

  return row;
};

module.exports = {
  login,
  regist
};
