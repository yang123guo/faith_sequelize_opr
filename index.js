/*
 * @file: 入口文件
 * @version: 1.0.0
 * @author: yangguoqiang
 * @Date: 2019-01-19 11:37:25
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2019-01-21 23:52:17
 * @Description:
 */


// const dbConnection = require('./src/dbInit');
// const User = require('./src/models/users');
// const Product = require("./src/models/product");
const refermian = require('./src/models/refermian');
const referfollow = require('./src/models/referfollow');


// console.log("建立模型User: ", User);
// console.log("建立带索引的模型", Product);

// 建立从属关系，通过外键
referfollow.belongsTo(refermian, {
    foreignKey: "pid",
    targetKey: "pid"
});

refermian.sync({
    force: true
});

setTimeout(() => {
    referfollow.sync({
        force: true
    });
}, 1000);
