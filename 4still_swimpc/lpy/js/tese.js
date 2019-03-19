window.onload=function(){
    //json数据
  var  infor1={
      img1:["image/特色长线首图.png"]
  }
//   var infor2={
//       img:["image/14806739679309.png","image/14806628386473.png"],
//       a:["点击出发"]
//   }
  var infor3={
    img:["image/特色cen3.png","image/特色cen3-1.png"],
    a:["无情铁手"]
}
//  var infor4={
//      img:["image/14782289753605.png","image/14782290806522.png"],
//      a:["心动不如行动"]
//  }

   var cen=document.getElementById("cen")
   var cenimg=cen.getElementsByTagName("img")

//    var cen1=document.getElementById("cen1")
//    var cen1img=cen.getElementsByTagName("img")
//    var cen1a=cen.getElementsByTagName("a")

   var cen2=document.getElementById("cen2")
   var cen2img=cen2.getElementsByTagName("img")
   var cen2a=cen2.getElementsByTagName("a")

   var cen3=document.getElementById("cen3")
   var cen3img=cen3.getElementsByTagName("img")
   var cen3a=cen3.getElementsByTagName("a")

   //循环遍历
   for(var i=0;i<cenimg.length;i++){
    cenimg[i].src=infor1.img1[i]
   }

//    for(var i=0;i<cen1img.length;i++){
//     cen1img[i].src=infor2.img[i]
//    }
//    for(var i=0;i<cen1a.length;i++){
//     cen1a[i].innerHTML=infor2.a[i]
//    }

   for(var i=0;i<cen2img.length;i++){
    cen2img[i].src=infor3.img[i]
   }
   for(var i=0;i<cen2a.length;i++){
    cen2a[i].innerHTML=infor3.a[i]
   }

//    for(var i=0;i<cen3img.length;i++){
//     cen3img[i].src=infor4.img[i]
//    }
//    for(var i=0;i<cen3a.length;i++){
//     cen3a[i].innerHTML=infor4.a[i]
//    }
}