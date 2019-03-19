window.onload=function(){
//json数据
  var infor1 ={
    nr:[{span:"精选租车爆款", src:"image/自驾游图片.png"},
         {span:"精选车型",src:"image/自驾游图片.png"}

]
  }

  var cen1=document.getElementsByClassName("cen1")


  for(var i=0;i<cen1.length;i++){
 
        cen1[i].getElementsByTagName("span")[0].innerHTML=infor1.nr[i].span
        
        cen1[i].getElementsByTagName("img")[0].src=infor1.nr[i].src
        
  }
}