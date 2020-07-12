const xss = require('xss');
const { exec, escape } = require('../db/mysql');
const { genPassword } = require('../utils/cryp');

const login = async (username, password) => {
  username = escape(username);

  // 生成加密密码
  password = genPassword(password);
  password = escape(password);
  const sql = `
        select username, realname from users where username=${username} and password=${password}
    `;
  const rows = await exec(sql);

  return rows[0] || {};
};

const regist = async (username, password) => {
  password = genPassword(password);
  password = xss(password);
  const createTime = Date.now();

  console.log(username, 'username');
  const sql = `insert into users(username, password, createTime) values ('${username}', '${password}', '${createTime}')`;
  const row = await exec(sql);

  console.log(row);

  return row;
};

module.exports = {
  login,
  regist
};
