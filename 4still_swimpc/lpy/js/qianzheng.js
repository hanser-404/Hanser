window.onload=function(){

  var infor1={
       "wenzi":["首页","机酒自由行","邮轮","私人定制","租车自驾","周边","签证","保险"]
  }
  var infor2={
      title:["尚游推荐"],
      nr:[{src:"image/wKgBEFtqvyCAYJLrAACWGmw4eXc39.jpeg",span1:"日本",span2:"$88元起"},
      {src:"image/美国.png",span1:"美国",span2:"$88元起"},
      {src:"image/中国.jpeg",span1:"中国",span2:"$88元起"}
    ]
  }
 var infor3={
     title:"热门国家/地区",
      nr:[{src:"image/日本3.jpeg",p1:"日本",p2:"$9.9起"},{src:"image/国旗2 (1).jpeg",p1:"美国",p2:"$19.9起"},{src:"image/国旗2 (1).jpeg",p1:"美国",p2:"$29.9起"},{src:"image/国旗2 (1).jpeg",p1:"瑞士",p2:"$29.9起"},
        {src:"image/日本3.jpeg",p1:"中国",p2:"$9.9起"},{src:"image/我的国旗1.jpeg",p1:"日本",p2:"$9.9起"},{src:"image/我的国旗1.jpeg",p1:"日本",p2:"$9.9起"},{src:"image/国旗2 (1).jpeg",p1:"日本",p2:"$9.9起"},
        {src:"image/我的国旗1.jpeg",p1:"美国",p2:"$19.9起"},{src:"image/我的国旗1.jpeg",p1:"瑞士",p2:"$9.9起"},{src:"image/日本3.jpeg",p1:"日本",p2:"$9.9起"},{src:"image/日本3.jpeg",p1:"瑞士",p2:"$9.9起"},]
 }
 
 var infor4={
       nr:[{src:"image/国旗2 (2).png",p1:"1.选择签证"},{src:"image/确认订单.png",p1:"2.确认订单"},{src:"image/国旗2 (6).png",p1:"3.支付费用"},
       {src:"image/邮件.png",p1:"4.邮件"},{src:"image/国旗2 (3).png",p1:"5.签证"},{src:"image/签证.png",p1:"6.出境成功"},]
 }

 var infor5={
      nr:[{src:"image/贴心服务.png",p1:"贴心服务",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"},
      {src:"image/筛选.png",p1:"认真筛选",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"},
      {src:"image/安心陪护.png",p1:"安心陪护",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"}]
 }
  var header2=document.getElementById("header2")
  var lis=header2.getElementsByTagName("li")

 var cen2r=document.getElementsByClassName("cen2-r");
   
 var  cen3=document.getElementById("cen3");
  var cen3p=cen3.getElementsByTagName("p")

 //尚游推荐
 var cen2= document.getElementById("cen2");
 var cen2p=cen2.getElementsByTagName("p")

 //热门国家/地区
   
  var cen3b=document.getElementsByClassName("cen3-b");

//办理流程
 var cen4y=document.getElementsByClassName("cen4-y");

//官方服务
 var cen51=document.getElementsByClassName("cen5-1");


  for(var i=0;i<lis.length;i++){
      lis[i].innerHTML=infor1.wenzi[i];
  }

  
  for(var i=0;i<cen2r.length ;i++){
     cen2r[i].getElementsByTagName("img")[0].src=infor2.nr[i].src
     cen2r[i].getElementsByTagName("span")[0].innerHTML=infor2.nr[i].span1
     cen2r[i].getElementsByTagName("span")[1].innerHTML=infor2.nr[i].span2
    }
//尚游推荐
    for(var i=0;i<cen2p.length;i++){
            cen2p[i].innerHTML=infor2.title[i]
    }
//热门国家/地区
  
  for(var i=0;i<cen3b.length;i++){
      cen3b[i].getElementsByTagName("img")[0].src=infor3.nr[i].src
      cen3b[i].getElementsByTagName("p")[0].innerHTML=infor3.nr[i].p1
      cen3b[i].getElementsByTagName("p")[1].innerHTML=infor3.nr[i].p2
    }
 
 //办理流程
  for(var i=0;i<cen4y.length;i++){
    cen4y[i].getElementsByTagName("img")[0].src=infor4.nr[i].src
    cen4y[i].getElementsByTagName("p")[0].innerHTML=infor4.nr[i].p1
  }
  //官方服务
  for(var i=0;i<cen51.length;i++){
      cen51[i].getElementsByTagName("img")[0].src=infor5.nr[i].src
      cen51[i].getElementsByTagName("p")[0].innerHTML=infor5.nr[i].p1
      cen51[i].getElementsByTagName("p")[1].innerHTML=infor5.nr[i].p2
  }
} 