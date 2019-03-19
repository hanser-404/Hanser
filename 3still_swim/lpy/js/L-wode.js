
window.onload=function(){
    //json数据
    var infor1={
        span:["Hi~欢迎来到尚游","让心灵去旅行"],
         a:["点击登录","注册"],
         img:["image/登录骆驼.png"]
    }
 
    var infor2={
        img:["image/我的旅行基金.png"]
    }
    var infor3={
        nr:[{src:"image/我的代金卷.png",wenzi:"代金卷"},{src:"image/我的信用卡.png",wenzi:"信用卡"},
             {src:"image/我的钱包.png",wenzi:"借现金"},{src:"image/我的拿去花.png" ,wenzi:"借花呗"}
        ]
    }
     
    var infor4={
        p:["我的旅行"],
        wenzi:["分享你的旅行图片","用相片记录你的旅途的美"],
        img:["image/相机.png"]
    }
    var infor5={
        nr:[{src:"image/我的安全保障.png",span1:"付款优惠哟",span2:"支付满减、先到先得",a:"去开通"},
            {src:"image/我的皇冠.png",span1:"有绝对优惠",span2:"会员特权、限时立减50",a:"去实名"}
        ]
    }
     var header3=document.getElementById("header3");
     var header3img=header3.getElementsByTagName("img");
     var header3span=header3.getElementsByTagName("span")
     var header3a=header3.getElementsByTagName("a")

    //旅行基金
    var  cen=document.getElementById("cen")
    var cenimg=cen.getElementsByTagName("img")

    //我的钱包
    var yiyang=document.getElementsByClassName("yiyang")
    //我的旅行
    var cen2=document.getElementById("cen2");
    var cen2p=cen2.getElementsByTagName("p")
    var cen2img=cen2.getElementsByTagName("img")
    var cen2spans=cen2.getElementsByTagName("span")
    //今日任务
    var cen31=document.getElementsByClassName("cen3-1")


     for(var i=0;i<header3img.length;i++){
        header3img[i].src=infor1.img[i]
     }
     for(var i=0;i<header3span.length;i++){
     header3span[i].innerHTML=infor1.span[i]
     }

     for(var i=0;i<header3a.length;i++){
        header3a[i].innerHTML=infor1.a[i] 
     }

     //旅行基金
     for(var i=0; i<cenimg.length;i++){
         cenimg[i].src=infor2.img[i]
     }
     //我的钱包
     for(var i=0;i<yiyang.length;i++){
        yiyang[i].getElementsByTagName("img")[0].src=infor3.nr[i].src
        yiyang[i].getElementsByTagName("span")[0].innerHTML=infor3.nr[i].wenzi
    }
    //我的旅行
    for(var i=0;i<cen2p.length;i++){
        cen2p[i].innerHTML=infor4.p[i]
    }
    for(var i=0;i<cen2img.length;i++){
        cen2img[i].src=infor4.img[i]
    }
    for(var i=0;i<cen2spans.length;i++){
        cen2spans[i].innerHTML=infor4.wenzi[i]
    }
    //今日任务
    for(var i=0;i<cen31.length;i++){
        cen31[i].getElementsByTagName("img")[0].src=infor5.nr[i].src
        cen31[i].getElementsByTagName("span")[0].innerHTML=infor5.nr[i].span1
        cen31[i].getElementsByTagName("span")[1].innerHTML=infor5.nr[i].span2
        cen31[i].getElementsByTagName("a")[0].innerHTML=infor5.nr[i].a
    }
    console.log(infor1.span[2])
    document.getElementById("xinling").innerHTML="<a href='../ykw/joinus.html'>"+infor1.span[1]+"</a>"
}

