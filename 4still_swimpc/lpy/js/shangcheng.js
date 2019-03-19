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
 var infor2={
     "wenzi":["首页","机酒自由行","邮轮","私人定制","租车自驾"],
     "wenzi1":["周边","签证","保险"]
    }

var infor3={
   "img":["image/商城4.png","image/商城5.png","image/商城6.png","image/商城7.png"]
}
 var infor4={ 
     "img":["image/商城8.jpg","image/商城9.jpg","image/商城10.jpg","image/商城11.jpg","image/商城12.jpg","image/商城11.jpg","image/geng.png"],
     "wenzi":["机酒自由行","挑选全球机票 酒店 邮轮等产品","[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全","[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全",
    "[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全","[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全","查看更多","机酒自由行产品"]
    }

 var infor5={
     "wenzi":["跟团/自助游","挑选全球机票 酒店 邮轮等产品","[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全",
                "[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全","[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全",
              "[樱花季][拒签全退]上海/杭州直飞日本大阪/东京5-6天往返含税机票（周末出行+全","查看更多","机酒自由行产品"],
      "img":["image/商城自助游大图.jpg","image/商城自助游1.jpg","image/商城自助游2.jpg","image/商城自助游3.png","image/商城自助游4.jpg","image/商城自助游5.jpg","image/geng.png"]
 }
//导航栏第二个
     var  header2left=document.getElementById("header2-left");
     var  header2leftli=header2left.getElementsByTagName("li");
     //导航右边
     var  header2right=document.getElementById("header2-right");
      var  header2rightli=header2right.getElementsByTagName("li");
//第一组图片
      var cen=document.getElementById("cen");
      var img=cen.getElementsByTagName("img");

//机酒自由行
    var cen1=document.getElementById("cen1");
    var img2=cen1.getElementsByTagName("img");  
    var spanp=cen1.getElementsByClassName("yiyang");
    //  var sanp=cen1.querySelectorAll("span,p")

// 跟团自主游
var cen2=document.getElementById("cen2");
var img3=cen2.getElementsByTagName("img");
var spanp2=cen2.getElementsByClassName("yiyang1");
//头部遍历
     for(var i=0;i<header2leftli.length;i++){
        header2leftli[i].innerHTML=infor2.wenzi[i];
     }
     for(var i=0; i<header2rightli.length;i++){
         header2rightli[i].innerHTML=infor2.wenzi1[i];
     }

   // 第一组图片遍历
   for( var i=0;i<img.length;i++ ){
       img[i].src=infor3.img[i];
   }
   //机酒自由行
   for(var i=0; i<img2.length;i++){
       img2[i].src=infor4.img[i];
   }
    for(var i=0; i<spanp.length;i++){
        spanp[i].innerHTML=infor4.wenzi[i];
    }

//跟团自助游
  for( var i=0;i<img3.length;i++){
    img3[i].src=infor5.img[i];
    
  }
 for( var i=0;i<spanp2.length;i++){
    spanp2[i].innerHTML=infor5.wenzi[i];
 }

}