const moment = require('moment');
var createmessage= (from, text)=>{
    return {
      from,
      text,
      cretatedAt: moment().format("hh:mm A")
    };
};
module.exports= {createmessage};
