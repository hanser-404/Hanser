window.onload = function () {
  var data = {
    //造数据
    "tit": [
      "【东京&镰仓】带妈妈跨年~因为你，世界",
      "上破九天揽明月，下游深海探龙宫",
      "大不列颠的魔幻体验 伦敦+牛津+曼",
      "【贝加尔湖】达斯维达尼亚，冷酷仙境的"
    ],
    "info": [
      {
        "name": "枫行Maple",
        "tit": "【东京&镰仓】带妈妈跨年~因为你，世界",
        "content": "去年底，我在日本大阪跨年。今年底，我要去东京跨年。除了目的地不同，这次行程还有个更大的不同，就是我要带着",
        "date": "日本  1小时前｜ 旅游"
      },
      {
        "name": "枫行Maple",
        "tit": "【K酱のsmall world】枫叶渐红秋日寒之逐枫京都",
        "content": "如果你们喜欢本游记，还希望你们能收藏点赞哦，当然如果能留个言就更好啦！希望这篇游记能帮到更多打算去京都旅游，探索京都景点与美食的朋",
        "date": "中国  2小时前｜ 出差"
      },
      {
        "name": "枫行Maple",
        "tit": "【自由行天下】探寻最美小镇德奥捷行摄记（2018带着父母游中欧）精华",
        "content": "写在前面：自从旅行成了我们兴趣排行榜NO.1之后 关心各家航空公司大促信息已经成了一种习惯 记得18年元旦 我们选择和好友去普吉跨年 在飞行...",
        "date": "中国  3小时前｜ 旅游"
      },
      {
        "name": "枫行Maple",
        "tit": "王国之心——阿曼苏丹国游记（含超2万字及大量图片锦囊风超详细攻略）精华",
        "content": "前言 Introduction为什么要去阿曼？ Why Oman很尴尬，一开始并不是瞄着阿曼去的，纯粹是因为川航会员日促销，看到成都往返迪拜有含税不到1...",
        "date": "加拿大  4小时前｜ 出差"
      }
    ]
  }
  //添加热门话题
  var heat = document.querySelector(".heat")//获取父亲盒子
  for (var i = 0, a = data.tit.length; i < a; i++) {
    var tit = document.createElement("p")
    var a1 = document.createElement("a")
    tit.className = "tit"
    tit.appendChild(a1)
    a1.innerText = data.tit[i]
    heat.appendChild(tit)//添加到父亲盒子
  }
  //第一个p的a添加路径
  var son = document.querySelector(".tit>a")
  son.href = "../area_son/area_son.html"

  //添加主内容
  var main = document.querySelector(".main")//获取主内容盒子
  for (var i = 0, info = data.info.length; i < info; i++) {
    main.innerHTML += "<div class=\"section\"><p class=\"se-fx\">" + data.info[i].name +
      "</p><hr /><p class=\"se-tit\">" + data.info[i].tit + "</p><p class=\"se-con\">" + data.info[i].content +
      "</p><div><p>" + data.info[i].date + "</p></div></div>"

  }

}