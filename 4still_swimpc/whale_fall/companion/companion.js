window.onload = function () {
  var data = {
    "imgMax": "img/1.jpg",
    "seek": ["结伴同游", "寻找路上的那个他", "寻找他"],
    "con-nav-cen": [
      ["出发时间", "2019", "不限", "4月", "5月", "6月", "5月", "6月", "7月"],
      ["目的地点", "2019", "欧洲", "亚洲", "美洲", "南极洲", "法国"]
    ],
    "release": [
      {
        "tit": "最近发布", "re-con": [
          ["img/3.jpg", "img/2.jpg", "李彦龙", "日本"],
          ["img/3.1.jpg", "img/1.1.jpg", "李浩鹏", "中国"],
          ["img/3.2.jpg", "img/1.2.jpg", "李天一", "中国"],
          ["img/3.3.jpg", "img/1.3.jpg", "李铁刚", "美国"],
          ["img/3.4.jpg", "img/1.4.jpg", "李君昊", "中国"],
          ["img/3.5.jpg", "img/1.5.jpg", "李佳滢", "中国"],
          ["img/3.6.jpg", "img/1.6.jpg", "李远航", "法国"],
          ["img/3.7.jpg", "img/1.7.jpg", "李婉琴", "中国"],
        ]
      },
      {
        "tit": "最近发布", "re-con": [
          ["img/3.8.jpg", "img/1.7.jpg", "李宇轩 ", "中国"],
          ["img/3.9.jpg", "img/1.6.jpg", "李家旭", "美国"],
          ["img/3.4.jpg", "img/1.5.jpg", "李玉珑", "日本"],
          ["img/3.1.jpg", "img/1.4.jpg", "李嘉濠", "韩国"],
          ["img/3.6.jpg", "img/1.3.jpg", "李紫桐", "英国"],
          ["img/3.9.jpg", "img/1.1.jpg", "李雪柔", "法国"],
          ["img/3.91.jpg", "img/1.2.jpg", "李春红", "中国"],
          ["img/3.92.jpg", "img/2.jpg", "李翔宇", "中国"],
        ]
      }
    ]
  }

  document.querySelector(".top-img>img").src = data.imgMax
  for (var i = 0; i < data.seek.length; i++) {
    document.querySelectorAll(".seek>h2,.seek>span,.seek>a")[i].innerText = data.seek[i]
  }
  //添加中间导航栏
  for (var i = 0; i < data["con-nav-cen"].length; i++) {
    document.querySelector(".con-nav").innerHTML += "<div class=\"con-nav-cen\"></div>"
    for (var j = 0; j < data["con-nav-cen"][i].length; j++) {
      var spans = document.createElement("span")
      spans.innerText = data["con-nav-cen"][i][j]
      document.querySelectorAll(".con-nav>.con-nav-cen")[i].appendChild(spans)
    }
  }

  //传主内容
  var content = document.querySelector(".content")//找到整个容器
  for (var i = 0; i < data.release.length; i++) {
    var release = document.createElement("div")//创建最近发布和最近出发
    release.className = "release"
    release.innerHTML = "<div class=\"release-tit\"><h2>" + data["release"][i].tit + "</h2></div><div class=\"re-con\"></div>"
    for (var j = 0; j < data.release[i]["re-con"].length; j++) {
      var section = document.createElement("div")//创建每个小盒子
      //给里面添加内容
      section.className = "section"
      section.innerHTML = "<img src=\""
        + data["release"][i]["re-con"][j][0] + "\" alt=\"\"><div><img src=\""
        + data["release"][i]["re-con"][j][1] + "\" alt=\"\"><span>"
        + data["release"][i]["re-con"][j][2] + "</span><h2>"
        + data["release"][i]["re-con"][j][3] + "</h2></div>"

      content.appendChild(release)//添加到大容器中
      document.querySelectorAll(".re-con")[i].appendChild(section)
      // release.appendChild(section)
    }
  }


}