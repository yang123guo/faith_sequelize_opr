const Sequelize = require('sequelize');
const dbConnection = require('../dbInit');

const referfollow = dbConnection.define('opr_referfollow', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        comment: "自增id"
    },
    pid: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: "商品id"
    },
    title: {
        type: Sequelize.STRING(50),
        defaultValue: "",
        comment: "商品标题"
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: "http://www.sougou.com",
        comment: "图片"
    }
},
{
    freezeTableName: true,
});


// referfollow.sync({
//     force: true
// });

module.exports = referfollow;
