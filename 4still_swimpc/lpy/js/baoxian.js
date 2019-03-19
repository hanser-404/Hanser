window.onload=function(){

  //json数据
  var infor2={
    "wenzi":["首页","机酒自由行","邮轮","私人定制","租车自驾"],
    "wenzi1":["周边","签证","保险"]
   }
   var infor3={
       "img":["image/保险1.png"]
   }
   var infor4={
       "img":["image/保险2.png"]
   }
  
   var infor5={
    "tit":["热销产品,绝对的保障","性价比之王"],
    nr:[
    {srcs:"image/保险5.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/商城9.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$40元起"},
    {srcs:"image/保险6.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$50元起"},
    {srcs:"image/保险7.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险5.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/商城9.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险6.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险7.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险5.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/商城9.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险6.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险7.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险5.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/商城9.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险6.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"},
    {srcs:"image/保险7.jpg",p1:"太平旅行意外险穷游制定计划之一",p2:"$30元起"}
   ]
}
 var infor6={
     "img":["image/保险2.png"]
 }
   var  header2left=document.getElementById("header2-left");
   var  header2leftli=header2left.getElementsByTagName("li");
   //导航右边
     var  header2right=document.getElementById("header2-right");
    var  header2rightli=header2right.getElementsByTagName("li");
    //主体部分1
     var cen=document.getElementById("cen");
    var img1=cen.getElementsByTagName("img")
    //主体部分2
     var cen1=document.getElementById("cen1");
     var img2=cen1.getElementsByTagName("img");
    //主体部分3
    var cen2y=document.getElementsByClassName("cen2-y");

    var cen3=document.getElementById("cen3")
    
    //头部遍历
    for(var i=0;i<header2leftli.length;i++){
        header2leftli[i].innerHTML=infor2.wenzi[i];
     }
     for(var i=0; i<header2rightli.length;i++){
         header2rightli[i].innerHTML=infor2.wenzi1[i];
     }
   //主体部分1
   for(var i=0;i<img1.length;i++){
        img1[i].src=infor3.img[i]
   }
   //主体部分2
   for(var i=0;i<img2.length; i++){
    img2[i].src=infor4.img[i];
   }
   //主体部分3
   for(var i=0;i<cen2y.length;i++){
    cen2y[i].innerHTML="<img src='"+infor5.nr[i].srcs+"'><p class=\"xian\">" +infor5.nr[i].p1+"</p><p style=\"color:#FF9800\">" +infor5.nr[i].p2+"</p>" 
}       

    //主体部分4
    //    cen3.innerHTML= "<img src=\"" + infor6.img[0]+ "\">"
        cen3.innerHTML= "<img src=\""+ infor6.img[0] + "\">"
}
