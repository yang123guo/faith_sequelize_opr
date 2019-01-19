/*
 * @file: 在faith库中创建users表
 * @version: 1.0.0
 * @author: yangguoqiang
 * @Date: 2019-01-19 11:54:22
 * @LastEditors: yangguoqiang
 * @LastEditTime: 2019-01-19 13:14:20
 * @Description:
 */

const Sequelize = require('sequelize');
var dbConnection = require('../dbInit');

const users = dbConnection.define('opr_user', {
    // 主键
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // 主键
        autoIncrement: true, // 自增
        comment: "主键，自增"  // 注释:只在代码中有效
    },
    // 用户名
    username: {
        type: Sequelize.STRING,
        comment: "用户名",
        allowNull: false,
        defaultValue: 'faith'
    },
    // 密码
    pwd: {
        type: Sequelize.STRING,
        comment: "密码",
        allowNull: false,
        defaultValue: '123456'
    },
    // 状态
    status: {
        type: Sequelize.INTEGER,
        comment: "状态"
    },
    // 昵称
    nickname: {
        type: Sequelize.STRING,
        comment: "昵称"
    },
    // token
    token: {
        type: Sequelize.UUID,
        comment: "token"
    },
    // 创建时间
    create_time: {
        type: Sequelize.DATE,
        comment: "创建时间"
    },
    // 修改时间
    mofify_time: {
        type: Sequelize.DATE,
        comment: "修改时间"
    },
    // 版本号
    version: {
        type: Sequelize.TINYINT,
        comment: "版本号"
    },
    // 备注
    remark: {
        type: Sequelize.TEXT,
        comment: "版本号"
    }
},
{
    // 额外配置
    freezeTableName: true, // 表名和数据表一致
    timestamps: false, // 去掉默认的添加时间和更新时间
});

// sync同步: 没有就新建,有就不变 users.sync();
// 如果加上了{force: true} 先删除后同步 （DROP TABLE IF EXISTS 已存在的会被覆盖
users.sync({
    force: true
});

module.exports = users;
