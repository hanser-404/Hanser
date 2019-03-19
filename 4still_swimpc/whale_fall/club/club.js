window.onload = function () {
  var data = {
    "main_top": ["img/1.png", "每隔2月这个神秘的组织-", "尚游俱乐部", "-会发出更为神秘的邀请卡", "在有你的城市，在某个Live House，某个咖啡馆，某个小型club甚至露天的青草地。", "大隐隐于市，赴一场摩登世界的旅行之约！"],
     "main-mid" :[
       {"picture":"img/2.jpg","text":"烟花三月下扬州——蜂首聚乐部"},
       {"picture":"img/2.1.jpg","text":"盘点大阪及周边的HOT SPOT"},
       {"picture":"img/2.2.jpg","text":"迪拜及周边必体验"},
       {"picture":"img/2.3.jpg","text":"除了雪这里拥有一切"},
       {"picture":"img/2.4.jpg","text":"一生要来一次一次定爱一回"},
       {"picture":"img/2.5.png","text":"与情人共同漫步夕阳下的海滩"}
     ],
    "main-we":["我们正在期待，更多对旅行热爱如生命的人","找到这个神秘的组织，加入这个有爱的大家庭，一起去探寻生活的更多可能性"],
    "main-bot":[
      {"srcs":"img/4.jpg","text":"何心妍"},
      {"srcs":"img/4.1.jpg","text":"李子柒"},
      {"srcs":"img/4.2.jpg","text":"唐嘉娜"},
      {"srcs":"img/4.3.jpg","text":"张娇莹"},
      {"srcs":"img/4.4.jpg","text":"李诗嫣"},
      {"srcs":"img/4.5.jpg","text":"周琬婷"}
    ]

  }

  document.querySelector(".main-top").innerHTML =
    "<img src=\"" + data.main_top[0] + "\" alt=\"\"><p>"
    + data.main_top[1] + "<span>" + data.main_top[2] + "</span>"
    + data.main_top[3] + "</p><p>" + data.main_top[4] + "</p><p>" + data.main_top[5] + "</p>"

  for (var i = 0; i < data["main-mid"].length; i++) {
    document.querySelector(".main-mid").innerHTML +="<div class=\"section\"><img src=\""
      +data["main-mid"][i].picture+"\" alt=\"\"><p>"
      +data["main-mid"][i].text+"</p></div>"
  }
  //传我们正在期待
  for (var i = 0; i < data["main-we"].length; i++) {
      var ps=document.createElement("p")
      ps.innerText=data["main-we"][i]
      document.querySelector(".main-we").appendChild(ps)
  }
  //传底部的内容
  for (var i = 0; i < data["main-bot"].length; i++) {
     document.querySelector(".main-bot").innerHTML+=
       "<div class=\"section2\"><div><img src=\""
    +data["main-bot"][i].srcs+"\" alt=\"\"></div><p>"
    +data["main-bot"][i].text+"</p></div>"
  }

}