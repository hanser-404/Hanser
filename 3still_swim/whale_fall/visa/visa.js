window.onload=function () {
  var data = {
    round: [
      "../img/樱花.png",
      "../img/海滩.png",
      "../img/法属.png",
      "../img/签证.png",
      "../img/发现.png",
      "../img/樱花.png"
    ],
    "info":[
      {"im":"../img/签证3.jpg","country":"美国","article":"美国个人旅游/商务/探亲签证(可选拒签退全款/加急)"},
      {"im":"../img/签证2.jpg","country":"英国","article":"英国个人旅游签证(北京领区,全国收取)"},
      {"im":"../img/签证1.jpg","country":"日本","article":"[上海领区]日本个人旅游签证(单次/多次可选,拒签退款)"}
    ]
  }
  //传轮播图数据
  var imgList = document.querySelector(".imgList")//获取轮播图盒子
  for (var i = 0, ro = data.round.length; i < ro; i++) {
    var im=document.createElement("img")
    im.src=data.round[i]
    imgList.appendChild(im)
  }

  //传详细介绍
  var introduce=document.querySelector(".introduce")//取详细介绍盒子
  for (var i = 0; i < data.info.length; i++) {
    introduce.innerHTML +="<section><a><img src=\""
      +data.info[i].im+"\" alt=\"\"><div><p>"
      +data.info[i].country+"</p><p>"
      +data.info[i].article+"</p></div></a></section>"
  }
  //取详细介绍的美国
  var a1=document.querySelector(".introduce>section>a")
  a1.href="../visa_son/visa_son.html"
}