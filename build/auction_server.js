"use strict";
/**
 * Created by cyb on 2019/1/14.
 */
var express = require('express');
var app = express();
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "第1个", 1.99, 3.6, "aaaa", ["手机", "电脑"]),
    new Product(2, "第2个", 1.992, 3.62, "aaaa2", ["手机2", "电脑2"]),
    new Product(3, "第3个", 1.993, 3.63, "aaaa3", ["手机3", "电脑3"]),
    new Product(4, "第4个", 1.994, 3.64, "aaaa4", ["手机4", "电脑4"])
];
app.get('/', function (req, res) {
    res.send("Hello Express");
});
app.get('/products', function (req, res) {
    res.json(products);
});
app.get('/product:id', function (req, res) {
    // res.json(products.find((product)=>product.id == req.params.id));//>>??
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已经启动了，地址是http://localhost:8000");
});
//# sourceMappingURL=auction_server.js.map