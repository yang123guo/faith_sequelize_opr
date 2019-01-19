/*
 * @file:
 * @version: 1.0.0 测试外键关联的主表
 * @author: yangguoqiang
 * @Date: 2019-01-19 17:06:34
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2019-01-19 22:33:09
 * @Description:
 */


const Sequelize = require('sequelize');
const dbConnection = require('../dbInit');

const refermian = dbConnection.define('opr_refermian', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "自增id"
    },
    pid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "商品自定义id"
    },
    title: {
        type: Sequelize.STRING(50),
        defaultValue: "",
        comment: "商品标题"
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: "", //默认值
        comment: "图片"
    }
}, {
        freezeTableName: true,
        indexes: [{
            unique: true,
            fields: ['pid']
        },]
    });

// refermian.sync({
//     force: true
// });

module.exports = refermian;
