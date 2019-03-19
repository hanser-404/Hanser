window.onload=function(){

 var infor1={
     img:["image/招聘1.jpg","image/招聘2.jpg"],
     li:["我们想说","几个理由","工作环境","福利待遇","工作机会"],
     p1:["你知道吗？","我们和你一样热爱旅行"," 而美好的旅程不应独享，为了记录一次年会出行，我们上天下地入海记录了普吉岛的点点滴滴。因为我们的工作就是帮助中国旅行者，以自己的视角体验世界。","我的尚游，你在哪里？"],
 }

 var infor2={
     nr:[{src:"image/招聘主体1.jpg",wenzi:"我们坚信旅行可以让人们彼此了解，可以让我们更加宽容；我们坚信我们的工作可以让自己和这个世界都变得更好，我们坚信我们能够鼓励和帮助中国旅行者获得更好的旅行和生命体验"},
     {src:"image/招聘主体2.jpg",wenzi:"我们坚信旅行可以让人们彼此了解，可以让我们更加宽容；我们坚信我们的工作可以让自己和这个世界都变得更好，我们坚信我们能够鼓励和帮助中国旅行者获得更好的旅行和生命体验"},
     {src:"image/招聘主体3.jpg",wenzi:"我们坚信旅行可以让人们彼此了解，可以让我们更加宽容；我们坚信我们的工作可以让自己和这个世界都变得更好，我们坚信我们能够鼓励和帮助中国旅行者获得更好的旅行和生命体验"},
    {src:"image/招聘主体.jpg",wenzi:"我们坚信旅行可以让人们彼此了解，可以让我们更加宽容；我们坚信我们的工作可以让自己和这个世界都变得更好，我们坚信我们能够鼓励和帮助中国旅行者获得更好的旅行和生命体验"}]
 }

   var cen=document.getElementById("cen")
   var imgs=cen.getElementsByTagName("img")
   var lis=cen.getElementsByTagName("li")
   var p=cen.getElementsByTagName("p")

    var  cen3left3=document.getElementsByClassName("cen3-left3")
   
    var cen3right=document.getElementsByClassName("cen3-right")
   
    for(var i=0;i<imgs.length;i++){
  imgs[i].src=infor1.img[i];
   }
   
   for(var i=0; i<lis.length;i++){
     lis[i].innerHTML=infor1.li[i]
   }
   
   for(var i=0;i<p.length;i++){
        p[i].innerHTML=infor1.p1[i]
   }

   for(var i=0;i<cen3left3.length;i++){
       cen3left3[i].getElementsByTagName("img")[0].src=infor2.nr[i].src
       cen3left3[i].getElementsByTagName("span")[0].innerHTML=infor2.nr[i].wenzi
   }
}