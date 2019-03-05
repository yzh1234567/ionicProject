const mysql=require("mysql");
var pool=mysql.createPool({
     host:"w.rdc.sae.sina.com.cn",
     port:3306,
     user:"ymwojojm2x",
     password:"**********",
     database:"app_superlove",
     connectionLimit:20,
});
module.exports=pool;