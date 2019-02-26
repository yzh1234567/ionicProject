const pool=require("../mysql.js");
const express=require("express");
// 使用express模块创建路由
// var router=express.Router();
var router=express.Router();

// 功能1 登录路由
   router.post("/login",(req,res)=>{

       var uname=req.body.uname;
       var upwd=req.body.upwd;
    //    验证用户名，密码;
    var regUname=/^\w{6,12}$/g;
    var regUpwd=/^\w{8,20}$/g;
    if(!uname){
        res.send({code:-1,msg:"用户名不能为空"});
        return;
    };
    if(!regUname.test(uname)){
        res.send({code:-2,msg:"用户名格式不正确"});
        return;
    };
    if(!upwd){
        res.send({code:-3,msg:"密码不能为空"});
        return;
    };
    if(!regUpwd.test(upwd)){
        res.send({code:-4,msg:"密码格式不正确"});
        return;
    };
    // sql语句;
    var sql="select uid from coobar_user where uname=? or phone=? and upwd=md5(?)";
    pool.query(sql,[uname,uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            req.session.uid=result[0].uid;
            res.send({
                code:1,msg:"登录成功"
            });
        }else {
            res.send({
                code:-5,msg:"用户名或密码有误"
            })
        };
    })
   });

//功能2 退出登陆功能

router.post("/logout",(req,res)=>{
    var uname=req.body.uname;
    var upwd=req.body.upwd;
    // sql语句
    var sql="select uid from coobar_user where uname= ? or phone= ? and upwd=md5(?)";
    pool.query(sql,[uname,uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            req.session.uid=undefined;
            res.send({code:1,msg:"退出登陆成功"})
        }else{
            res.send({code:-1,msg:"退出登陆失败"})
        }
    })
})

//功能3 获取主页数据
router.get("/index",(req,res)=>{
     var data={}, progress=0;
    //  sql语句一
    var sql1="select id,img,src from coobar_adimg";
    pool.query(sql1,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            progress+=100;
            data.adData=result;
            if(progress>=300){
                res.send({code:200,data:data})
            }
        }else{
            res.send({code:401,data:"获取广告轮播图失败"})
        }
    });
    // sql语句二
    var sql2="select id ,pid,img_src,old_price,href,new_price,title,count from coobar_index_f1_product order by seatNumber asc";
    pool.query(sql2,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            progress+=100;
            data.dataF1=result;
            if(progress>=300){
                res.send({code:200,data:data})
            }
        }else{
            res.send({code:402,data:"获取1楼数据失败"})
        }
    });
    // sql语句三
    var sql3="select id ,pid,img_src,old_price,href,new_price,title from coobar_index_f2_product order by seatNumber asc";
    pool.query(sql3,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            progress+=100;
            data.dataF2=result;
            if(progress>=300){
                res.send({code:200,data:data})
            }
        }else{
            res.send({code:403,data:"获取2楼数据失败"})
        }
    })
})

//功能6 获取产品列表并分页查询
     router.get("/products",(req,res)=>{
        
         var obj={code:1},progress=0;
        //1、  获取参数
          var pno=req.query.pno;
          var pageSize=req.query.pageSize;
          var kword=req.query.kwords;
          if(pno==undefined){
              pno=1
          }
          if(pageSize==undefined){
              pageSize=20
          }
        //2、 正则验证
        var reg=/^[0-9]{1,}$/;
            if(!reg.test(pno)){
                res.send({code:-1,msg:"页码格式不正确"});
                return;
            }else if(pno==0){
                 res.send({code:-2,msg:"页码初始值不能为0"});
                 return;
            }
            if(!reg.test(pageSize)){
                res.send({code:-3,msg:"页大小格式不正确"});
                return;
            }else if(pageSize==0){
                res.send({code:-4,msg:"页大小的值不能为0"});
                return;
            }
            // sql语句查询
          if(kword==undefined){
                  //查询总页码  
              var sql="select count(id) as c from coobar_products";
              pool.query(sql,(err,result)=>{
                  if(err) throw err;
                  if(result.length>0){
                      //  设置变量总页数
                      var pageCount=Math.ceil(result[0].c/pageSize);
                      progress+=50;
                      obj.pageCount=pageCount;
                      if(progress>=100){
                          res.send(obj)
                      }
                  }
              })
                // 查询当前页内容
                var sql1="select id,title,old_price,new_price,count,img_src,href from coobar_products limit ?,? ";
                 var offset=parseInt((pno-1)*pageSize);
                     pageSize=parseInt(pageSize);
                    pool.query(sql1,[offset,pageSize],(err,result)=>{
                        if(err) throw err;
                        if(result.length>0){
                            progress+=50;
                            obj.data=result;
                            if(progress>=100){
                                res.send(obj)
                            }
                        }
                    })
          }else{
                   kword=kword.split(" ");
                   var arr=kword.map(function(){ return " details like ? ";});
                   var str=arr.join(" and ");
                   //查询总页码  
                   var sql="select count(id) as c from coobar_products where "+str;
                   kword.forEach(function(value,i,arr){
                       kword[i]=`%${value}%`;
                   })
                   pool.query(sql,kword,(err,result)=>{
                       if(err) throw err;
                       if(result.length>0){
                           //  设置变量总页数
                           var pageCount=Math.ceil(result[0].c/pageSize);
                           progress+=50;
                           obj.pageCount=pageCount;
                           if(progress>=100){
                               res.send(obj)
                           }
                       }
                   })
                     // 查询当前页内容
                      var offset=parseInt((pno-1)*pageSize);
                          pageSize=parseInt(pageSize);
                          kword.push(offset);
                          kword.push(pageSize);
                      var sql1="select id,title,old_price,new_price,count,img_src,href from coobar_products where " +str + " limit ?,? ";
                         pool.query(sql1,kword,(err,result)=>{
                             if(err) throw err;
                             if(result.length>0){
                                 progress+=50;
                                 obj.data=result;
                                 if(progress>=100){
                                     res.send(obj)
                                 }
                             }
                         })
          }
     }) ;
//功能7 注册路由
  router.post("/register",(req,res)=>{
          var  uname=req.body.uname;
          var upwd=req.body.upwd;
          var phone=req.body.phone;
        //  正则验证
        var reg=/^[\w\u4e00-\u9fa5]{6,12}$/g;
        var reg1=/^[\w.!@#$%?]{8,20}$/g;
        var reg2=/^1[3-9][0-9]{9}$/g;
        if(uname==undefined){
            res.send({code:-1,msg:"用户名不能为空"});
            return;
        }else if(!reg.test(uname)){
            res.send({code:-2,msg:"用户名格式不正确"});
            return;
        };
        if(upwd==undefined){
            res.send({code:-3,msg:"密码不能为空"});
            return;
        }else if(!reg1.test(upwd)){
            res.send({code:-4,msg:"密码格式不正确"});
            return;
        };
        if(phone==undefined){
            res.send({code:-5,msg:"手机号码不能为空"});
            return;
        }else if(!reg2.test(phone)){
            res.send({code:-6,msg:"手机号码格式不正确"});
            return;
        };
        // sql语句
         var sql="insert into coobar_user (uid,uname,upwd,phone)values(null,?,md5(?),?)";
         pool.query(sql,[uname,upwd,phone],(err,result)=>{
             if(err) throw err;
             if(result.affectedRows>0){
                 res.send({code:1,msg:"恭喜"+uname+"注册成功"});
             }else{
                 res.send({code:-7,msg:"注册失败"})
             }
         })
  });
// 功能8 加入购物车
router.get("/addCart",(req,res)=>{
    var uid=req.session.uid;
    var count=req.query.count;
    var pid=req.query.pid;
    if(uid==undefined){
        res.send({code:-1,msg:"请先登录"});
        return;
    };
    // sql语句
       
       var sql="insert into coobar_cart (cid,uid,pid,count) values (null,?,?,?)";
       pool.query(sql,[uid,pid,count],(err,result)=>{
            if(err) throw err;
            if(result.affectedRows>0){
                res.send({code:1,msg:"加入购物车成功"})
            }else{
                res.send({code:-2,msg:"加入购物车失败"})
            }
       })
});
// 功能9 ，查询购物车
router.get("/queryCart",(req,res)=>{
    var uid=req.session.uid;
    var pno=req.query.pno;
    var pageSize=req.query.pageSize;
    var progress=0 , data={}, pageCount=0;
    // 判断 pno 是否存在
    if(pno==undefined){
        pno=1;
    }else{
        pno=parseInt(req.query.pno);
    };
    if(pageSize==undefined){
        pageSize=5;
    }else{
        pageSize=parseInt(req.query.pageSize);
    };
    if(uid==undefined){
        res.send({code:-1,msg:"请先登录"});
        return;
    };
    // sql语句查询当前页购物车的内容
    var offset=(pno-1)*pageSize;
    var sql="select p.title,p.old_price,p.new_price,p.img_src,c.count,c.cid from coobar_cart c ,coobar_products p where p.id=c.pid and uid=? limit ?,? ";
    pool.query(sql,[uid,offset,pageSize],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            progress+=50;
            data.data=result;
            if(progress>=100){
                res.send({code:1,msg:data});
            }
        }else{
            res.send({code:-2,msg:"查询购物车失败"})
        }
    })
    // sql语句查询总页码
        var sql1="select count(cid) from coobar_cart where uid=?";
        pool.query(sql1,[uid],(err,result)=>{
            if(err) throw err;
            if(result.length>0){
                progress+=50;
                pageCount=Math.ceil(result[0]["count(cid)"]/pageSize);
                data.pageCount=pageCount;
                if(progress>=100){
                    res.send({code:1,msg:data})
                }
            }
        })
});
// 更新购物车
router.get("/updateCart",(req,res)=>{
    var count=req.query.count;
    var cid=req.query.cid;
    if(count==undefined){
        count=1
    };
    // sql语句
    var sql="update coobar_cart set count= ? where cid= ?";
    pool.query(sql,[count,cid],(err,result)=>{
         if(err) throw err;
         if(result.affectedRows>0){
             res.send({code:1,msg:"购物车更新成功"})
         }else{
             res.send({code:-2,msg:"更新失败"})
         }
    })
});
// 删除购物车里面的一件商品
router.get("/deleteCart",(req,res)=>{
    var cid=req.query.cid;
    var uid=req.session.uid;
    if(uid==undefined){
        res.send({code:-1,msg:"请先登陆"});
        return;
    }
    // sql语句
    var sql="delete from coobar_cart where cid = ?";
    pool.query(sql,[cid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"删除商品成功"})
        }else{
            res.send({code:-2,msg:"删除商品失败"})
        }
    });
// 删除购物车所有商品
});
// 功能13 查询商品详情
router.get("/productDetail",(req,res)=>{
    var pid=req.query.pid;
    var obj={},progress=0;
    if(pid==undefined){
        pid=1;
    };
    // sql语句1
    var sql="select pic.img_sm,pic.img_md,pic.img_lg from coobar_product_img pic  where pic.pid=?";
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            progress+=50;
            obj.pics=result;
            if(progress>=100){
                res.send({code:1,msg:obj})
            };    
        }else {
            res.send({code:-1,msg:"查询商品详情失败1"})
        };
    });
    // sql语句2
    var sql2="select p.old_price,p.new_price ,p.count from coobar_products p where id=?";
    pool.query(sql2,[pid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            progress+=50;
            obj.details=result;
            if(progress>=100){
                res.send({code:1,msg:obj})
            };
        }else {
            res.send({code:-1,msg:"查询商品详情失败2"})
        }
    })
})
// 导出路由
module.exports=router;
