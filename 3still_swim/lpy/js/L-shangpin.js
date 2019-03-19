window.onload=function(){

  var infor1={
      nr:[{span1:"直飞航班",span2:"上海直飞沙巴,一站到底,省去转机时间以及旅途劳累"},
          {span1:"行程自由",span2:"上海直飞北京,一站到底,只见到你这一路的旅途之美"}]
  }
   
  var infor2={
      span:["当地特色","只管飞耒阳,一站到底,到了直接来我家包吃包住"]
  }

  var infor3={
      span:["温馨提示","多程机票按行程完全使用,往返机票无法单独使用回程","使用回程"]
  }

  var infor4={
     span:["简介"],
      src:["image/商城长图.jpg"]
     
  }
  var cen=document.getElementsByClassName("cen")

  var cen1=document.getElementById("cen1")
  var cen1span=cen1.getElementsByTagName("span")

  var cen2=document.getElementById("cen2")
  var cen2span=cen2.getElementsByTagName("span")
  
  var cen4=document.getElementById("cen4");

  var cen4img=cen4.getElementsByTagName("img")
  var cen4span=cen4.getElementsByTagName("span")


  for(var i=0;i<cen.length;i++){
    //   console.log(infor1.nr[i].span2)
    cen[i].getElementsByTagName("span")[0].innerHTML=infor1.nr[i].span1
    cen[i].getElementsByTagName("span")[1].innerHTML=infor1.nr[i].span2
  }


  for(var i=0;i<cen1span.length;i++){
        cen1span[i].innerHTML=infor2.span[i]
  }
  for(var i=0;i<cen2span.length;i++){
        cen2span[i].innerHTML=infor3.span[i]
  }
//最后
  for(var i=0;i<cen4span.length;i++){
    cen4span[0].innerHTML=infor4.span[0]
}
  for(var i=0;i<cen4img.length;i++){
      cen4img[i].src=infor4.src[i]
  }
 
}