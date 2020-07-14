const router = require('koa-router')();
const { login, regist } = require('../controller/user');
const { SuccessModel, ErrorModel } = require('../model/resModel');

router.prefix('/api/user');

// 登录
router.post('/login', async (ctx, next) => {
  const { username, password } = ctx.request.body;
  const data = await login(username, password);
  console.log(data)

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
  const { username, password, phoneNumber } = ctx.request.body;

  if (username && password && phoneNumber){
    const data = await regist(username, password, phoneNumber);

    ctx.body = new SuccessModel();

    return;
  }
  ctx.body = new ErrorModel('信息填不完整！');
});

module.exports = router;

