use coobar;
create table coobar_user(
      uid int primary key auto_increment,
      uname varchar(20) unique not null,
      upwd varchar(32)  not null,
      phone char(20)  
);

use coobar;
create table coobar_cart(
    cid  int primary key auto_increment,
    uid  int not null,
    pid  int not null,
    count int 
)
use coobar;
create table coobar_adImg(
    id int primary key auto_increment,
    img varchar(128),
    src varchar(128),
    title varchar(128),
    aid int
);
insert into coobar_adImg(id,img,src) values(null,"img/index-section/lunbo1.jpg","/products");
insert into coobar_adImg(id,img,src) values(null,"img/index-section/lunbo2.jpg","/products");
insert into coobar_adImg(id,img,src) values(null,"img/index-section/lunbo3.jpg","/products");

use coobar;
create table coobar_index_F1_product(
    id int primary key auto_increment,
    pid int,
    img_src varchar(128),
    href varchar(128),
    old_price decimal(10,2),
    new_prece decimal(10,2),
    title varchar(128),
    count int,
    seatNumber int
);
create table coobar_index_F2_product(
    id int primary key auto_increment,
    pid int,
    img_src varchar(128),
    href varchar(128),
    old_price decimal(10,2),
    new_prece decimal(10,2),
    title varchar(128),
    seatNumber int
);
create table coobar_index_F2_product(
    id int primary key auto_increment,
    pid int,
    img_src varchar(128),
    href varchar(128),
    old_price decimal(10,2),
    new_prece decimal(10,2),
    title varchar(128),
    seatNumber int
);
create table coobar_index_F3_product(
    id int primary key auto_increment,
    pid int,
    img_src varchar(128),
    href varchar(128),
    old_price decimal(10,2),
    new_prece decimal(10,2),
    title varchar(128),
    seatNumber int
);
create table coobar_products(
    id int primary key auto_increment,   #产品的id
    title VARCHAR(128),         #主标题
    old_price DECIMAL(10,2),    #原价格
    new_price decimal(10,2),    #新价格
    count  int ,                #购买数量
    img_src varchar(128),
    href varchar(128),

    lname VARCHAR(32),          #商品名称
    category VARCHAR(32),       #所属分类
    details VARCHAR(1024),      #产品详细说明

    shelf_time datetime,          #上架时间
    sold_count INT  ,           #已售出的数量
    surplus_count int           #库存量
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "新疆板栗南瓜单个装重1-2kg",
    49.90,
    29.90,
    1,
    "img/F1_product/南瓜1.jpg",
    "/details/",
    "南瓜",
    "蔬菜",
    "新疆板栗南瓜单个装重1-2kg",
     now(),
     2999,
     100
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "四川四季豆500g",
    9.90,
    4.90,
    1,
    "img/F1_product/四季豆1.jpg",
    "/details/",
    "四季豆",
    "蔬菜",
    "四川四季豆500g",
     now(),
     3897,
     146
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "重庆娃娃菜500g",
    4.90,
    2.90,
    1,
    "img/F1_product/娃娃菜1.jpg",
    "/details/",
    "娃娃菜",
    "蔬菜",
    "重庆娃娃菜500g",
     now(),
     23234,
    234
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "山东白萝卜500g",
    4.90,
    3.90,
    1,
    "img/F1_product/白萝卜1.jpg",
    "/details/",
    "萝卜",
    "蔬菜",
    "山东白萝卜500g",
     now(),
     2334,
    1234
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "江苏莲藕500g",
    5.90,
    2.50,
    1,
    "img/F1_product/莲藕1.jpg",
    "/details/",
    "莲藕",
    "蔬菜",
    "江苏莲藕500g",
     now(),
     21334,
    234
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "福建蜜薯500g(单个重约260g)",
    9.90,
    5.90,
    1,
    "img/F1_product/红薯1.jpg",
    "/details/",
    "红薯",
    "蔬菜",
    "福建蜜薯500g(单个重约260g)",
     now(),
     21334,
    2342
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "湖北甜玉米3根装重约750g",
    16.90,
    9.90,
    1,
    "img/F1_product/玉米.jpg",
    "/details/",
    "玉米",
    "蔬菜",
    "湖北甜玉米3根装重约750g",
     now(),
     21334,
    352
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "甘肃金针菇500g",
    9.90,
    6.90,
    1,
    "img/F1_product/金针菇1.jpg",
    "/details/",
    "金针菇",
    "蔬菜",
    "甘肃金针菇500g",
     now(),
     21638,
    382
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "新西兰进口奇异果4kg(30-36个)新鲜美味",
    159.00,
    99.00,
    1,
    "img/F2_product/TB1drRwkCzqK1RjSZFHSuv3CpXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "奇异果",
    "水果",
    "新西兰进口奇异果4kg(30-36个)新鲜美味",
     now(),
     1638,
    382
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "泰国龙眼2kg(皮薄肉厚核小)",
    29.90,
    19.90,
    1,
    "img/F2_product/TB1J6ZjoNYaK1RjSZFnSuu80pXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "龙眼",
    "水果",
    "泰国龙眼2kg(皮薄肉厚核小)",
     now(),
     41638,
    422
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "泰国进口红毛丹2.5kg",
    129.00,
    79.00,
    1,
    "img/F2_product/TB1lpxmkgHqK1RjSZFkSut.WFXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "红毛丹",
    "水果",
    "泰国进口红毛丹2.5kg",
     now(),
     2338,
    234
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "墨西哥进口牛油果一盒(12个)",
    199.00,
    99.00,
    1,
    "img/F2_product/TB1n8YGiPTpK1RjSZKPSuu3UpXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "牛油果",
    "水果",
    "墨西哥进口牛油果一盒(12个)",
     now(),
     12338,
    84
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "台湾甜芒果2kg",
    49.00,
    29.00,
    1,
    "img/F2_product/TB1Npthkb2pK1RjSZFsSuuNlXXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "芒果",
    "水果",
    "台湾甜芒果2kg",
     now(),
     42638,
    135
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "越南进口红龙果6个",
    129.00,
    69.00,
    1,
    "img/F2_product/TB1vAMoh3HqK1RjSZFPSuwwapXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "火龙果",
    "水果",
    "越南进口红龙果6个",
     now(),
     32323,
    1335
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "智利进口车厘子2kg",
    199.00,
    129.00,
    1,
    "img/F2_product/TB1Wq65kAzoK1RjSZFlSuui4VXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "车厘子",
    "水果",
    "智利进口车厘子2kg",
     now(),
     32323,
    1335
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "菲律宾进口菠萝蜜1个(重4-6kg)",
   129.00,
    69.00,
    1,
    "img/F2_product/TB1yOoVh7PoK1RjSZKbSut1IXXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "菠萝蜜",
    "水果",
    "菲律宾进口菠萝蜜1个(重4-6kg)",
     now(),
     12323,
    3335
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "秘鲁进口蓝莓1kg",
   129.00,
    89.9,
    1,
    "img/F2_product/TB13RNjkCzqK1RjSZFLSuwn2XXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "蓝莓",
    "水果",
    "秘鲁进口蓝莓1kg",
     now(),
     2323,
    335
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "南非西柚12个(约重4kg)",
   169.00,
   119,
    1,
    "img/F2_product/TB178W3j3TqK1RjSZPhSutfOFXa.jpg_240x5000Q60s0.jpg_.webp",
    "/details/",
    "西柚",
    "水果",
    "南非西柚12个(约重4kg)",
     now(),
     21323,
    1335
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "澳大利亚进口牛排套餐10片装",
   199.00,
   129.00,
    1,
    "img/F3_produc/5ac74859Nd2ba4167.jpg!q80.webp",
    "/details/",
    "牛肉",
    "肉类",
    "澳大利亚进口牛排套餐10片装",
     now(),
     1323,
    112
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "六和 鸡爪 1000g/袋 卤鸡爪食材烧烤食材烤鸡爪)",
   49.90,
   29.90,
    1,
    "img/F3_produc/5af56c0eN14d05186.jpg!q80.webp",
    "/details/",
    "鸡爪",
    "肉类",
    "六和 鸡爪 1000g/袋 卤鸡爪食材烧烤食材烤鸡爪)",
     now(),
     2122,
    212
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "阿根廷进口牛腱子1.5kg",
   149.00,
   89.00,
    1,
    "img/F3_produc/5b19e796Nc52a5c42.jpg!q80.webp",
    "/details/",
    "牛肉",
    "肉类",
    "阿根廷进口牛腱子1.5kg",
     now(),
     1323,
    258
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "韩国进口鲜活牡蛎2.5kg  海鲜水产生蚝 刺身生蚝2.5kg",
   199.00,
   99.00,
    1,
    "img/F3_produc/5b696be7Nf570f376.jpg!q80.webp",
    "/details/",
    "牡蛎",
    "肉类",
    "韩国进口鲜活牡蛎2.5kg  海鲜水产生蚝 刺身生蚝2.5kg",
     now(),
     13323,
    2258
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "日本 冷冻无公害金鲳鱼  1000g 2条 袋装 海鲜水产",
   199.00,
   129.00,
    1,
    "img/F3_produc/5be4f0ddN03d1dee5.jpg!q80.webp",
    "/details/",
    "金鲳鱼",
    "肉类",
    "日本 冷冻无公害金鲳鱼  1000g 2条 袋装 海鲜水产",
     now(),
     41323,
    7258
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "百年栗园 散养土鸡大公鸡1000g/只 农家散养",
   129.00,
   79.00,
    1,
    "img/F3_produc/37f1313fa5041d59.jpg!q80.webp",
    "/details/",
    "公鸡",
    "肉类",
    "百年栗园 散养土鸡大公鸡1000g/只 农家散养",
     now(),
     5373,
    139
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "内蒙古大草原羔羊肉片 1000g/袋 无公害谷饲 火锅食材羊肉卷",
   99.00,
   59.00,
    1,
    "img/F3_produc/59c1d989Ncb17b9ed.jpg!q80.webp",
    "/details/",
    "羊",
    "肉类",
    "内蒙古大草原羔羊肉片 1000g/袋 无公害谷饲 火锅食材羊肉卷",
     now(),
     4373,
    69
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "甘肃 羔羊羊蝎子 1000g/袋 羊脊骨 无公害谷饲",
   149.00,
   89.00,
    1,
    "img/F3_produc/58180449Ncb53676f.jpg!q80.webp",
    "/details/",
    "羊",
    "肉类",
    "甘肃 羔羊羊蝎子 1000g/袋 羊脊骨 无公害谷饲",
     now(),
     56773,
    169
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "新土豆4-5个重约2kg",
   8.00,
   4.50,
    1,
    "img/F1_product/土豆1.jpg",
    "/details/",
    "土豆",
    "蔬菜",
    "新土豆4-5个重约2kg",
     now(),
     66773,
    769
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "湖南洋葱2个装(单个重0.5kg)",
   9.80,
   6.50,
    1,
    "img/F1_product/洋葱1.jpg",
    "/details/",
    "洋葱",
    "蔬菜",
    "湖南洋葱2个装(单个重0.5kg)",
     now(),
     47773,
    479
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "山东西红柿2kg",
   13.90,
   10.50,
    1,
    "img/F1_product/西红柿1.jpg",
    "/details/",
    "西红柿",
    "蔬菜",
    "山东西红柿2kg",
     now(),
     7573,
    349
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "大棚黄瓜3根装(单根重150g)",
   9.90,
   7.90,
    1,
    "img/F1_product/黄瓜1.jpg",
    "/details/",
    "黄瓜",
    "蔬菜",
    "大棚黄瓜3根装(单根重150g)",
     now(),
     27773,
    1349
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "云南松花菜1颗(重约1.6kg)",
   14.80,
   8.50,
    1,
    "img/F1_product/松花菜1.jpg",
    "/details/",
    "花菜",
    "蔬菜",
    "云南松花菜1颗(重约1.6kg)",
     now(),
     24545,
    1235
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "云南西蓝花1.5kg",
   12.90,
   7.50,
    1,
    "img/F1_product/西蓝花1.jpg",
    "/details/",
    "西蓝花",
    "蔬菜",
    "云南西蓝花1.5kg",
     now(),
     4773,
    79
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "湖北大棚小西红柿2kg",
   19.90,
   12.50,
    1,
    "img/F1_product/小西红柿1.jpg",
    "/details/",
    "西红柿",
    "蔬菜",
    "湖北大棚小西红柿2kg",
     now(),
     12773,
    148
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "黑龙江太空杂交玉米2kg",
   29.90,
   18.90,
    1,
    "img/F1_product/玉米2.jpg",
    "/details/",
    "玉米",
    "蔬菜",
    "黑龙江太空杂交玉米2kg",
     now(),
     9773,
    128
);
insert into coobar_products (id,title,old_price,new_price,count,img_src,href,lname,category,details,shelf_time,sold_count,surplus_count)values(
    null,
    "重庆有机蔬菜莲白2.5kg",
   18.90,
   12.90,
    1,
    "img/F1_product/莲白1.jpg",
    "/details/",
    "莲白",
    "蔬菜",
    "重庆有机蔬菜莲白2.5kg",
     now(),
     5733,
    58
);
create table coobar_product_img(
    id int primary key auto_increment,
    pid int,
    img_sm varchar(128),
    img_md varchar(128),
    img_lg varchar(128)
);
create table coobar_product_family(
    id int primary key auto_increment,
    name varchar(128)
)