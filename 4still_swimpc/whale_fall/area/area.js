window.onload = function () {
  var data = {
    "round": ["img/1.jpeg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/1.jpeg"],
    "ma_l": [
      ["王老五在中国发布的攻略", "【欢欢内地】五天四夜苏州第三刷~美食美景全推荐", "img/7.jpg", "img/6.jpg"],
      ["王老五在中国发布的攻略", "【欢欢内地】五天四夜苏州第三刷~美食美景全推荐", "img/7.1.jpg", "img/6.1.jpg"],
      ["王老五在中国发布的攻略", "【欢欢内地】五天四夜苏州第三刷~美食美景全推荐", "img/7.2.jpg", "img/6.2.jpg"],
      ["王老五在中国发布的攻略", "【欢欢内地】五天四夜苏州第三刷~美食美景全推荐", "img/7.3.jpg", "img/6.3.jpg"],
      ["王老五在中国发布的攻略", "【欢欢内地】五天四夜苏州第三刷~美食美景全推荐", "img/7.4.jpg", "img/6.4.jpg"],
      ["王老五在中国发布的攻略", "【欢欢内地】五天四夜苏州第三刷~美食美景全推荐", "img/7.5.jpg", "img/6.5.jpg"]
    ],
    "ma_r1": ["加入尚游社区和80,000,000穷游er在一起发现最世界", "img/10.jpg"],
    "ma_r2": [
      ["社区活动", "查看更多", "img/8.png"],
      ["天生爱海岛", "查看更多", "img/9.png"]
    ],
    "ps": ["尚游兑换币", "建议与反馈"]
  }

  //添加轮播图的图片
  var imgList = document.querySelector("#imgList")
  var navDiv = document.querySelector("#navDiv")
  for (var i = 0; i < data.round.length; i++) {
    imgList.innerHTML += "<img src=\"" + data.round[i] + "\"/>"
  }

  //添加左侧内容
  var ma_l = document.querySelector(".ma-l")
  for (var i = 0; i < data.ma_l.length; i++) {
    ma_l.innerHTML += "<div class=\"section clearfix\"><div><p>"
      + data.ma_l[i][0] + "</p><p>"
      + data.ma_l[i][1] + "</p><img src=\""
      + data.ma_l[i][2] + "\" alt=\"\"></div><img class=\"img2\" src=\""
      + data.ma_l[i][3] + "\" alt=\"\"></div>"
  }
  //添加右侧内容
  document.querySelector(".ma-r1").innerHTML = "<p>"
    + data.ma_r1[0] + "</p><img src=\""
    + data.ma_r1[1] + "\" alt=\"\">"

  var ma_r2 = document.querySelectorAll(".ma-r2")
  for (var i = 0; i < data.ma_r2.length; i++) {
    ma_r2[i].innerHTML = "<p class=\"tit\">"
      + data.ma_r2[i][0] + "<a>"
      + data.ma_r2[i][1] + "</a></p><img src=\""
      + data.ma_r2[i][2] + "\" alt=\"\">"
  }
  var ps = document.querySelectorAll(".ma-r>p")
  ps[0].innerText = data.ps[0]
  ps[1].innerText = data.ps[1]


  //无缝滚动
  var tim=setInterval(rol, 30);//定义一个接收定时器的变量
  var rolling=document.getElementById("rolling")
  rolling.onmouseover = function () {
      clearInterval(tim)//tim为undefined清楚定时器
  }
  rolling.onmouseout=function(){
    tim = setInterval(rol, 30)
  }

  // //无缝滚动
  // var tim;//定义一个接收定时器的变量
  // rolling.onclick = function () {
  //   if (tim) {
  //     clearInterval(tim)//tim为undefined清楚定时器
  //     tim = undefined;
  //   } else {
  //     tim = setInterval(rol, 30)
  //   }
  // }
  // rolling.onclick();//模拟点击，开启滚动

  function rol() {
    var listml = parseInt(getStyle(imgList, "marginLeft"))
    var imglists=document.querySelector("#imgList>img")
    var imgmarginRight = parseInt(getStyle(imglists, "marginRight"))
    console.log(imgmarginRight)
    if (listml === -5 * (980+imgmarginRight)) {
      imgList.style.marginLeft = 0 + "px"
    } else {
      imgList.style.marginLeft = listml - 10 + "px"
    }
  }
}

/*
 * 定义一个函数，用来获取指定元素的当前的样式
 * 参数：
 * 		obj 要获取样式的元素
 * 		name 要获取的样式名
 */
function getStyle(obj, name) {
  if (window.getComputedStyle) {
    //正常浏览器的方式，具有getComputedStyle()方法
    return getComputedStyle(obj, null)[name];
  } else {
    //IE8的方式，没有getComputedStyle()方法
    return obj.currentStyle[name];
  }
}