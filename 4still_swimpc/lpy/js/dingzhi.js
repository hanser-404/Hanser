window.onload=function(){

  //json数据
  var infor1={
      "wenzi":["首页","机酒自由行","邮轮","私人定制","租车自驾","周边","签证","保险"]
  }

 var infor2={
     quanbu:[
         {src:"image/贴心服务.png",p1:"贴心服务",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"},
         {src:"image/安心陪护.png",p1:"筛选",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"},
         {src:"image/筛选.png",p1:"安全防护",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"}
        ]
 }

 var infor3={
      "img":["image/top_banner.62ad23fd.jpg"]
 }

     var  header4 =document.getElementById("header4");
     var header4img=header4.getElementsByTagName("img");
     
    var header2=document.getElementById("header2");
    var lis= header2.getElementsByTagName("li");
    
    //官方服务
    var cen31=document.getElementsByClassName("cen3-1");

    for(var i=0;i<lis.length;i++){
        lis[i].innerHTML=infor1.wenzi[i]
        
    }
    //私人定制大图
    for(var i=0;i<header4img.length;i++){
        header4img[i].src=infor3.img[i];
    }
 
    for( var i=0; i<cen31.length; i++){
        cen31[i].getElementsByTagName("img")[0].src= infor2.quanbu[i].src
        cen31[i].getElementsByTagName("p")[0].innerHTML= infor2.quanbu[i].p1
        cen31[i].getElementsByTagName("p")[1].innerHTML= infor2.quanbu[i].p2
        
    }    
}