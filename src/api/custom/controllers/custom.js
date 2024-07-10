"use strict";

const qiniu = require("qiniu"); //引入七牛云服务
var accessKey = "kFkvvgcIzOzNuqSDOBsgDMyItLqljLDMXUry6F2c"; //your access key
var secretKey = "SP8vs90CBBG6e9smdC7aAclqFhXjZi3NyU2Zcopm"; //your secret key
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

module.exports = {
  getSck: async (ctx, next) => {
    try {
      var putPolicy = new qiniu.rs.PutPolicy({
        scope: "oss-audit",
        expires: 10000,
      });
      var uploadToken = putPolicy.uploadToken(mac);
      ctx.body = {
        code: 200,
        data: uploadToken,
      };
      next();
    } catch (err) {
      ctx.body = err;
    }
  },
};
