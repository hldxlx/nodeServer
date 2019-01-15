/**
 * Created by cyb on 2019/1/14.
 */
import * as express from 'express';
const app = express();
export class Product{
    constructor(
        public id:number,
        public title:string,
        public price:number,
        public rating:number,
        public desc:string,
        public categories:Array<string>
    ){

    }
}
const products:Product[] =[
    new Product(1,"第1个",1.99,3.6,"aaaa",["手机","电脑"]),
    new Product(2,"第2个",1.992,3.62,"aaaa2",["手机2","电脑2"]),
    new Product(3,"第3个",1.993,3.63,"aaaa3",["手机3","电脑3"]),
    new Product(4,"第4个",1.994,3.64,"aaaa4",["手机4","电脑4"])

];
app.get('/',(req,res) =>{
   res.send("Hello Express")
});
app.get('/products',(req,res) =>{
    res.json(products);
});
app.get('/product:id',(req,res) =>{
    // res.json(products.find((product)=>product.id == req.params.id));//>>??
});
const server = app.listen(8000,"localhost",()=>{
   console.log("服务器已经启动了，地址是http://localhost:8000");
});