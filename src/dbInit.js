/*
 * @file: 初始化连接db
 * @version: 1.0.0
 * @author: yangguoqiang
 * @Date: 2019-01-19 11:39:30
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2019-01-19 11:50:19
 * @Description:
 */

const Sequelize = require('sequelize');

const connect = new Sequelize({
    database: 'faith',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000,
        acquire: 30000
    },
    define: {
        freezeTableName: true,
        timestamps: true
    }
});

connect
    .authenticate()
    .then(() => {
        console.log('连接数据库：faith 成功！');
    })
    .catch(err => {
        console.error('连接失败:', err);
    });

module.exports = connect;
