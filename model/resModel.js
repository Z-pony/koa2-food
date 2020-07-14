class BaseModel{
  constructor (data, message){
    if (typeof data === 'string'){
      this.message = data;

      data = null;

      message = null;
    }

    if (data){
      this.data = data;
    }

    if (message){
      this.message = message;
    }
  }
}
class SuccessModel extends BaseModel{
  constructor (data, message){
    super(data, message);
    this.errno = 0;
    if(!this.message){
      this.message = '成功'
    }
  }
}

class ErrorModel extends BaseModel{
  constructor (data, message){
    super(data, message);
    this.errno = -1;
    if(!this.message){
      this.message = '失败'
      
    }
  }
}

module.exports = {
  SuccessModel,
  ErrorModel
};
