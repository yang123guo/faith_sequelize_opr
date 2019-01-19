/*
 * @file: 入口文件
 * @version: 1.0.0
 * @author: yangguoqiang
 * @Date: 2019-01-19 11:37:25
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2019-01-19 13:17:05
 * @Description:
 */


const dbConnection = require('./src/dbInit');
const User = require('./src/models/users');

console.log("建立模型User: ", User);
