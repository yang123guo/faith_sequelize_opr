/*
 * @file: 入口文件
 * @version: 1.0.0
 * @author: yangguoqiang
 * @Date: 2019-01-19 11:37:25
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2019-01-19 15:26:45
 * @Description:
 */


const dbConnection = require('./src/dbInit');
const User = require('./src/models/users');
const Product = require("./src/models/product");

console.log("建立模型User: ", User);
console.log("建立带索引的模型", Product);
