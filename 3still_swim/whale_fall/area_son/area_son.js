window.onload = function () {
  var data = [
    {
      "srcs": "../img/area1.jpg",
      "article":"“那是三年前一个寒冷的雨夜，\n" +
        "街角不停的流泄着一首悲伤的情歌，\n" +
        "因为听了那首歌而眼角含泪的她，怎么看都令人怜爱，\n" +
        "这场恋情就在希望她再展笑颜中开始”\n" +
        "——《大阪雨夜蓝调》"
    },
    {
      "srcs": "../img/area2.jpg",
      "article":"聊聊这次旅行说起我喜欢旅行这件事，应该是随了爸妈。爸爸妈妈一直都是喜欢旅行的人，很小的时候就开始带我游山玩水，妈妈喜欢拍照，爸爸就..."
    },
    {
      "srcs": "../img/area3.jpg",
      "article":"【序】在撒哈拉广袤的沙漠有一个传说，每年4月的时候，沙漠上会开满紫色的花。与此同时，在突尼斯北部的蓝白小镇，三叶梅正放肆的盛放在蔚..."
    }
  ]



  var main=document.querySelector(".main")
  for (var i = 0; i < data.length; i++) {
    main.innerHTML+= "<div class=\"section\"><img src=\""+data[i].srcs+"\" alt=\"\"><p>"+data[i].article+"</p></div>"
  }

}