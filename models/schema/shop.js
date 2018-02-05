/**
 * 商品信息
 */
var mongoose = require('../db.js'),
    Schema = mongoose.Schema;

var ShopsSchema = new Schema({          
    name : { type: String },                    //商品名称
    id: {type: String},                        //商品id
    price: {type: Number},                      //商品价格
    imgUrl : { type: String},                        //商品图片连接
    num : { type: Number},                       //商品库存
    isShow: {type: Boolean }                 //是否展示减少数量按钮
});

module.exports = mongoose.model('Shop',ShopsSchema);