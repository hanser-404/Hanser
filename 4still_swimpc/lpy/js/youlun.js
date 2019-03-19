window.onload = function () {
    //json数据
    var infor1 = {
        nr: ["首页", "机酒自由行", "邮轮", "私人定制", "租车自驾", "周边", "签证", "保险"]
    }
    //邮轮大船
    var infor2 = {
        img: ["image/邮轮大图1.jpg"]
    }
    var infor6={
     nr:   [{yuefen:"1月", chengshi:["香港","杭州","广州","天津","深圳","上海"]},
             {yuefen:"2月",chengshi:["西安","耒阳","衡阳","三塘","深圳","新疆"]},
             {yuefen:"3月",chengshi:["集中","大市","广州","天津","深圳","上海"]},
             {yuefen:"4月",chengshi:["排一","杭州","嘉兴","天津","金华","上海"]}
  ]
    }
   var cen12=document.getElementsByClassName("cen1-2");

  
    var infor3 = {
        title: ["邮轮"],
        nr: {
            riqi: ["出发日期", "不限", "1月", "2月", "3月", "4月"],
            didian: ["出发地", "不限", "广州", "香港", "杭州", "天津", "深圳", "香港"],
            youlun: ["邮轮公司","不限","黄梦邮轮","黄金邮轮","地中海邮轮","伯曼邮轮","星梦邮轮","伯曼邮轮"]
        }
    }
    
    var infor4={
        nr:[{src:"image/邮轮2.png",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"},{src:"image/邮轮4.png",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"},{src:"image/邮轮3.jpg",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"},{src:"image/邮轮2.png",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"},
            {src:"image/邮轮3.jpg",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"},{src:"image/邮轮4.png",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"},{src:"image/邮轮5.jpg",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"},{src:"image/邮轮4.png",span:"大西洋号",p1:"[03月09日]歌诗达邮轮大",p2:"西洋号深圳往返马尼苏拉"}]
    }
  
    var infor5={
        nr:[{src:"image/贴心服务.png",p1:"贴心服务",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"},
            {src:"image/筛选.png",p1:"认真筛选",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"},
            {src:"image/安心陪护.png",p1:"安心陪护",p2:"我们收集尚游er的真实诉求,找寻求特色旅行目的地,让穷游er放心出行"}]
    }

    var header2 = document.getElementById("header2")
    var lis = header2.getElementsByTagName("li")

    var cen = document.getElementById("cen")
    var cenimg = cen.getElementsByTagName("img")

     //记死了
    var cen12 = document.getElementsByClassName("cen1-2")
    var span1 = cen12[0].getElementsByTagName('span');
    var span2 = cen12[1].getElementsByTagName("span")
    var span3= cen12[2].getElementsByTagName("span")

    //热搜邮轮
    var cen22=document.getElementsByClassName("cen2-2");
  
    //官方服务
    var cen31=document.getElementsByClassName("cen3-1")
    //循环遍历
    for (var i = 0; i < lis.length; i++) {
        lis[i].innerHTML = infor1.nr[i]
    }
    //邮轮大船
    for (var i = 0; i < cenimg.length; i++) {
        cenimg[i].src = infor2.img[i]
    }

    //记死了
    for (var i = 0; i < span1.length; i++) {
        span1[i].innerHTML = infor3.nr.riqi[i]
    }

    for (var i = 0; i < span2.length; i++) {
        span2[i].innerHTML = infor3.nr.didian[i]
    }
 
    for(var i=0;i<span3.length;i++){
        span3[i].innerHTML=infor3.nr.youlun[i]
    }
    //热搜邮轮
    for( var i=0;i<cen22.length;i++){
        cen22[i].getElementsByTagName("img")[0].src=infor4.nr[i].src
        cen22[i].getElementsByTagName("span")[0].innerHTML=infor4.nr[i].span
        cen22[i].getElementsByTagName("p")[0].innerHTML=infor4.nr[i].p1
        cen22[i].getElementsByTagName("p")[1].innerHTML=infor4.nr[i].p2
    }

    for( var i=0;i<cen31.length;i++){
        cen31[i].getElementsByTagName("img")[0].src=infor5.nr[i].src
        cen31[i].getElementsByTagName("p")[0].innerHTML=infor5.nr[i].p1
        cen31[i].getElementsByTagName("p")[1].innerHTML=infor5.nr[i].p2
    }
     var month= cen12[0].getElementsByTagName("span");
     
    for(var i=2;i<month.length;i++){
        month[i].inedex=i-2;
        month[i].onclick=function(){
            cen12[1].innerHTML="<span style='border:none;margin-right: 13px'>出发地</span><span class='buxian'>不限</span>";
            for(var i=0;i<infor6.nr[this.inedex].chengshi.length;i++){
                cen12[1].innerHTML+="<span>"+infor6.nr[this.inedex].chengshi[i]+"</span>";

            }
        }
    }
}