const router = require('koa-router')();
const { login, regist } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.prefix('/api/user');

// 登录
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const data = await login(username, password);

  if (data.username){

    // 设置session
    ctx.session.username = data.username;
    ctx.session.password = data.password;
    ctx.body = new SuccessModel('成功');

    return;
  }
  ctx.body = new ErrorModel('失败');
});

// 注册
router.post('/regist', async (ctx, next) => {
  const { username, password } = ctx.request.body;

  console.log(username, password, 111);

  if (username){
    const data = await regist(username, password);

    ctx.body = new SuccessModel('成功');

    return;
  }
  ctx.body = new SuccessModel('失败');
});

module.exports = router;

