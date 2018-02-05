var Shop = require("../schema/shop.js");

var ShopDB = {
    /**
     * 插入
     */
    'insert' : function (res) {
    
        let shop = new Shop({
                        name : 'qiezi',                    //商品名称
                        id: '02',                        //商品id
                        price: 10,                      //商品价格
                        imgUrl : "http://m.360buyimg.com/babel/s235x235_jfs/t3394/288/2078078588/377542/eff0f1a2/583d2d75N8f66d5d2.jpg!q50.jpg.webp",                        //商品图片连接
                        num : 15,                       //商品库存
                        isShow: true                 //是否展示减少数量按钮
                    });

        shop.save(function (err, result) {

            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + result);
                res.send('insert success')
            }

        });
    },

    /**
     * 更新
     */
    'update': function (res){
        let num = {'name' : 'qiezi'};
        let updatenum = {'num' : '0'};

        // 找到库存为15的商品，更新其价格为0(只更新一条用findoneUpdate)   如果需要更新所有则使用update方法
        Shop.update(num, {$set:updatenum},{ multi: true}, function(err, result){
            if (err) {
                console.log("Error:" + err);
            }
            else {
                // console.log("Res:" + res);
                res.send('success')
            }
        })
    },

    /**
     * 删除
     */
    'del': function (){
        var name = {'name' : '萝卜'};
        // 删除所有名称为萝卜的商品（只删除一条使用findOneAndRemove）
        Shop.remove(name, function(err, res){
            if (err) {
                console.log("Error:" + err);
            }
            else {
                console.log("Res:" + res);
            }
        })
    },


    /**
     * 查询
     */
    'query': function (res){
        var price = {'price' : 10};
        var opt = {'_id': 0,'__v': 0} //配置参数（1表示查询输出该字段，0表示不输出）
        var resJSON = {
            "shops": [],
            "tabList": [
                {
                  "title": "今日特价",
                  "isShow": true
                },
                {
                  "title": "生鲜蔬菜",
                  "isShow": false
                },
                {
                  "title": "青菜类",
                  "isShow": false
                },
                {
                  "title": "野生菌类",
                  "isShow": false
                },
                {
                  "title": "豆制品类",
                  "isShow": false
                },
                {
                  "title": "辅助配菜",
                  "isShow": false
                },
                {
                  "title": "其他生疏类",
                  "isShow": false
                }
              ] 
        }
        // 查询价格为10元的商品
        Shop.find(price,opt, function(err, result){
            if (err) {
                console.log("Error:" + err);
            }
            else {
                // 输出只会有name字段，设置方法如上，1表示查询输出该字段，0表示不输出
                console.log("query success");
                // console.log(res);
                resJSON.shops.push(result)
                res.send(resJSON)
            }
        })

        // 模糊查询商品名称
        // let whereStr = {'name':{$regex:/萝/i}};
        // Shop.find(whereStr, function(err, res){
        //     if (err) {
        //         console.log("Error:" + err);
        //     }
        //     else {
        //         console.log("Res:" + res);
        //     }
        // })
        

        // 数量查询（text为商品名称）
        // Shop.count(price, function(err, res){
        //     if (err) {
        //         console.log("Error:" + err);
        //     }
        //     else {
        //         // 输出只会有username字段，设置方法如上，1表示查询输出该字段，0表示不输出
        //         console.log("Res:" + res);
        //     }
        // })
    }
}

module.exports = ShopDB