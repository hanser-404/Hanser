window.onload=function(){
   var infor1={
       "wenzi":["首页","机酒自由行","邮轮","私人定制","租车自驾","周边","签证","保险"]
   }
  
   var infor2={
       city:[
       ["热门出发地","北京","重庆","长沙","杭州","上海"],
       ["体育","篮球","皮球","羽毛球","棒球","橄榄球"],
       ["热门出发地","北京","重庆","长沙","杭州","上海"],
       ["热门出发地","北京","重庆","长沙","杭州","上海"]
    ]
   }

 var infor3={
      "img":["image/机酒大图1.png"]
 }

var infor4={
    "img":["image/机酒2.png","image/机酒3.png","image/机酒4.png"]
}

 var infor5={
    "title":["本周热销","热门酒店"],
      nr:[{src:"image/本周热销1.png",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
          {src:"image/本周热销2.png",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
          {src:"image/本周热销3.png",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
          {src:"image/本周热销4.gif",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
          {src:"image/本周热销1.png",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
          {src:"image/本周热销2.png",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
          {src:"image/本周热销3.png",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
          {src:"image/本周热销4.gif",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"}
        ]
 }

   var header2=document.getElementById("header2");
   var lis=header2.getElementsByTagName("li");
   var cenleft1=document.getElementsByClassName("cen-left1");

   var  cenright1=document.getElementById("cen-right-1");
   var  img3=cenright1.getElementsByTagName("img");

   //中间图片三个
   var cenright2=document.getElementById("cen-right-2");
   var img4=cenright2.getElementsByTagName("img");

   //主体部分
    var cen2y=document.getElementsByClassName("cen2-y");
    var cen2li=document.getElementsByClassName("cen2-li");
    
   for(var i=0;i<lis.length;i++){
       lis[i].innerHTML=infor1.wenzi[i];
   }
  for(var i=0; i<cenleft1.length;i++){ 
       for( var j=0;j<cenleft1[i].getElementsByTagName("span").length; j++){
        cenleft1[i].getElementsByTagName("span")[j].innerHTML=infor2.city[i][j]
       }
  }

  for( var i=0;i<img3.length;i++){
    img3[i].src=infor3.img[i]
  }
//中间图片三个
   for( var i=0; i<img4.length; i++){
       img4[i].src=infor4.img[i];
   }
   //主体部分
   for( var i=0;i<cen2y.length;i++){
    cen2y[i].getElementsByTagName("img")[0].src=infor5.nr[i].src;
    cen2y[i].getElementsByTagName("p")[0].innerHTML=infor5.nr[i].p1;
    cen2y[i].getElementsByTagName("p")[1].innerHTML=infor5.nr[i].p2;
   }
   for (var i=0;i<cen2li.length;i++){
     cen2li[i].getElementsByTagName("span")[0].innerHTML=infor5.title[i]
   }
}