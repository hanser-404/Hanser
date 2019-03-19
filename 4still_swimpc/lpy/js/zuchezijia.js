window.onload = function(){
    //轮播图
    var lbt = document.getElementById("lbt");
    var num = document.getElementById("num");
    var lis = lbt.getElementsByTagName("li");
    var nums = num.getElementsByTagName("li");

    var now = 0;
    function go(){
        for(var i = 0 ;i<lis.length;i++){
            nums[i].className = "";
        }
        lbt.style.marginLeft = -1600 * now +"px" ;
        nums[now].className = "on";
    }
    function next(){
        now++;
        if(now == lis.length){
            now = 0;
        }
        go();
    }
    for(var j = 0;j<nums.length;j++){
        nums[j].index = j;
        nums[j].onmouseover = function(){
            now = this.index;
            go();
        }
    }
    var times = null;
    times = setInterval(next,2000);
    box.onmouseover = function(){
        clearInterval(times);
    }
    box.onmouseout = function(){
        times = setInterval(next,2000)
    }
    //json数据
 var infor1={
     nr:["首页", "机酒自由行", "邮轮", "私人定制", "租车自驾", "周边", "签证", "保险"]
 }
 var infor2={
    nr:[{src:"image/租车自驾1.png",p1:"中国驾照就能租",p2:"通行全球100国"},
         {src:"image/租车自驾2.png",p1:"美国摩托车就能租",p2:"通行全球200国"},
         {src:"image/租车自驾3.png",p1:"日本驾照就能租",p2:"通行全球300国"}
    ]
 }

 var infor3={
     nr:[{ src:"image/安心陪护.png",span1:"海外自驾保险",span2:"保人保车"},
         {src:"image/新手指引.png",span1:"新手指引",span2:"一分钟了解国际租车"}
    ]
 }
 var infor4={
     nr:[{src:"image/租车自驾3.png",src1:"image/地点.png",p1:"美国",p2:"$249/天起"},
     {src:"image/租车自驾1.png",src1:"image/地点.png",p1:"中国",p2:"$1000/天起"},
     {src:"image/租车自驾2.png",src1:"image/地点.png",p1:"英国",p2:"$279/天起"},
     {src:"image/租车自驾3.png",src1:"image/地点.png",p1:"耒阳",p2:"$299/天起"},
     {src:"image/租车自驾1.png",src1:"image/地点.png",p1:"衡阳",p2:"$399/天起"},
     {src:"image/租车自驾2.png",src1:"image/地点.png",p1:"杭州",p2:"$199/天起"}
    ]
 }
 var header2=document.getElementById("header2");
   var li2=header2.getElementsByTagName("li")
 
   //出国自驾 轻松自驾
   var cenleft=document.getElementsByClassName("cen-left")
   //出国右边广告
   var cenrighttitile=document.getElementsByClassName("cen-right-titile")
 
 
   //精选租车
   var cen2left=document.getElementsByClassName("cen2-left")

   for(var i=0;i<li2.length;i++){
       console.log(infor1.nr[i])    
     li2[i].innerHTML=infor1.nr[i]
   }
   for(var i=0; i<cenleft.length; i++){
        cenleft[i].getElementsByTagName("img")[0].src=infor2.nr[i].src
        cenleft[i].getElementsByTagName("p")[0].innerHTML=infor2.nr[i].p1
        cenleft[i].getElementsByTagName("p")[1].innerHTML=infor2.nr[i].p2
   }
 
   for(var i=0;i<cenrighttitile.length;i++){
   cenrighttitile[i].getElementsByTagName("img")[0].src=infor3.nr[i].src
   cenrighttitile[i].getElementsByTagName("span")[0].innerHTML=infor3.nr[i].span1
   cenrighttitile[i].getElementsByTagName("span")[1].innerHTML=infor3.nr[i].span2
}
//精选租车
     for(var i=0;i<cen2left.length;i++){
        cen2left[i].getElementsByTagName("img")[0].src=infor4.nr[i].src
        cen2left[i].getElementsByTagName("img")[1].src=infor4.nr[i].src1
        cen2left[i].getElementsByTagName("span")[0].innerHTML=infor4.nr[i].p1
        cen2left[i].getElementsByTagName("span")[1].innerHTML=infor4.nr[i].p2
     }
}