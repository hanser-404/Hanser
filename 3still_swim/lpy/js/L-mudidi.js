 window.onload=function(){

    var infor1={
        nr:["简介","每日行程","- 感受不一样得美好,体验正宗的意大利 -"],
       img:["image/目的地头部.png"]
    }
    var infor2={
      img:["image/轮船.png"]
    }
  
    var infor3={
      
      a:["内舱房","海景房","阳台房","套房"],
      wenzi:["产品类型"]
    }

    var infor4={
      a:["立即预定"],
      spans:["3000元"]
    }

  var infor5={
    spans:["[03月14日]歌诗达邮轮大西洋号","深圳往返冲绳+宫古岛6天5晚邮轮之旅"]
  }

  var infor6={
     img:["image/目的地排序.png","image/目的地长图.png"]
  }

    var cenimg=document.getElementById("cen-img");
    var img2=cenimg.getElementsByTagName("img")

   var cen6=document.getElementById("cen-6")
    var spans=cen6.getElementsByTagName("span")
    var cen6img=cen6.getElementsByTagName("img")
 
     var cen3=document.getElementById("cen-3")
     var cen3span=cen3.getElementsByTagName("span")
     var cen3a=cen3.getElementsByTagName("a")

     //立即预定
     var cen5=document.getElementById("cen-5")
     var cen5a=cen5.getElementsByTagName("a")
     var cen5span=cen5.getElementsByTagName("span")

    var cen2=document.getElementById("cen-2")
    var cen2span=cen2.getElementsByTagName("span")
  
    //最后长图

    var cen7=document.getElementById("cen-7");
    var cen7img=cen7.getElementsByTagName("img")

    //循环遍历
  for(var i=0;i<spans.length;i++){
    spans[i].innerHTML=infor1.nr[i]
  }
 
  for(var i=0;i<cen6img.length;i++){ 
      
    cen6img[i].src=infor1.img[i] 
  }
  
  for(var i=0;i<cen6img.length;i++){
    img2[0].src=infor2.img[0]
  }
  //产品类型
   for(var i=0;i<cen3span.length;i++){
      cen3span[0].innerHTML=infor3.wenzi[0]
   }
   for(var i=0;i<cen3a.length;i++){
      cen3a[i].innerHTML=infor3.a[i]
   }
   //立即预定
   for(var i=0;i<cen5a.length;i++){
      cen5a[0].innerHTML=infor4.a[0];
   }
   for(var i=0;i<cen5span.length;i++){
    cen5span[0].innerHTML=infor4.spans[0];
 }
   for(var i=0;i<cen2span.length;i++){
      cen2span[i].innerHTML=infor5.spans[i]
   }

   //最后长图
   for(var i=0;i<cen7img.length;i++){
    cen7img[i].src=infor6.img[i]
   }

 }
//   var cen6=document.getElementsByClassName("cen-6");


//   for(var i=0;i<cen6.length;i++){
//       console.log(cen6.length)
//     cen6[i].getElementsByTagName("span")[0].innerHTML=infor1.nr[i].span
//     cen6[i].getElementsByTagName("img")[0].src=infor1.nr[i].src
//     cen6[i].getElementsByTagName("span")[1].innerHTML=infor1.nr[i].span1
//     cen6[i].getElementsByTagName("span")[2].innerHTML=infor1.nr[i].span2
  
// }
