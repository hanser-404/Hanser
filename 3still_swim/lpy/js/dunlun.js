window.onload=function(){

    var img1=[{yuefen:"1月",imgs:["image/日本.png","image/济州岛.png"]},
              {yuefen:"2月",imgs:["image/济州岛.png","image/日本.png"]},
             {yuefen:"3月",imgs:["image/济州岛.png","image/日本.png"]},
             {yuefen:"4月",imgs:["image/日本.png","image/济州岛.png"]}
            ]
     
    var infor1={
        nr:[{span:"免签目的地",src:"image/济州岛.png",src1:"image/QQ图片20190306201246.png"},
            {span:"免签目的地",src:"image/济州岛.png",src1:"image/QQ图片20190306201246.png"}
        ]
    }
    
var yuefen=document.getElementById("cen-2");
var yuefen1=yuefen.getElementsByTagName("a");

    var cen1=document.getElementsByClassName("cen1")

for(var i=0;i<img1.length;i++){  
    yuefen1[i].index=i;

    yuefen1[i].onclick=function(){
      document.getElementById("cen-3").innerHTML=""
    for(var i=0;i<img1[this.index].imgs.length;i++){
        
        document.getElementById("cen-3").innerHTML+="<img src="+img1[this.index].imgs[i]+">"
    }
 }
 yuefen1[i].onclick();
}
  
for(var i=0;i<cen1.length;i++){
    cen1[i].getElementsByTagName("span")[0].innerHTML=infor1.nr[i].span

    cen1[i].getElementsByTagName("img")[0].src=infor1.nr[i].src
    cen1[i].getElementsByTagName("img")[1].src=infor1.nr[i].src1
}
}
// data={
    //     "cen-2":["1月","2月","3月","4月"],
    //     "imgs":["image/日本.png","image/日本.png","image/日本.png","image/日本.png","image/日本.png","image/日本.png",]
    //   }
    //   for(var i=0;i<data["cen-2"].length;i++){
    //       document.querySelectorAll("#cen-2>a")[i].innerHTML=data["cen-2"][i]
    //   }
    //   for(var i=0;i<data.imgs.length;i++){
    //     document.querySelector(".cen img")[i].src=data.imgs[i]
    
    //   }
    