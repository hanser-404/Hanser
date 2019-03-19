window.onload=function () {
  var data = {
    round: [
      "../img/发现.png",
      "../img/兄弟0.jpg",
      "../img/法属.png",
      "../img/签证.png",
      "../img/海滩.png",
      "../img/发现.png"
    ],
    "article":[
        "大象保育园象夫体验，全家人分工照顾象宝宝博物、民俗体验，全家人一起逛菜市场用英泰双语买菜、辨识泰国香料、一起下厨学泰餐，那一夜，熊孩子喊爸爸妈妈，回家吃饭啦本地农场游玩及下午茶，用象噗噗造纸，并制作手工日记本",
      "泰迪熊博物馆是为展示百年来深受全世界人们喜爱的玩具熊而建的,虽然咱不提倡到丽江找艳遇，不过泡吧这件事仍然是到丽江必做的事情之一。",
      "在充满野趣的庭园之中，听这轻柔的音乐，天然花草的清香环绕周身，这样的环境下做SPA，一定是极致的享受"
    ],
    "se-img":[
      ["../img/亲子0.png","../img/亲子1.png","../img/亲子2.png","../img/亲子3.png","../img/亲子4.png"],
      ["../img/兄弟0.jpg","../img/兄弟1.jpg","../img/兄弟2.jpg","../img/兄弟3.jpg","../img/兄弟4.jpg"],
      ["../img/师生0.jpg","../img/师生1.jpg","../img/师生2.jpg","../img/师生3.jpg","../img/师生4.jpg"]
    ]
  }
  //传数据
  var imgList = document.querySelector(".imgList")//获取轮播图盒子
  for (var i = 0, ro = data.round.length; i < ro; i++) {
    imgList.innerHTML += "<img src=" + data.round[i] + ">"
    // var im=document.createElement("img")
    // im.src=data.round[i]
    // imgList.appendChild(im)
  }

  var ar = document.querySelectorAll(".ar")
  for (var i = 0; i < data.article.length; i++) {
    ar[i] .innerHTML = data.article[i]
  }

  //传图片
  var se_img=document.querySelectorAll(".se-img")
  for (var i = 0; i < se_img.length; i++) {
    var imgs=se_img[i].querySelectorAll("img")
    console.log(imgs.length)
    for (var j = 0; j < imgs.length; j++) {
      console.log(imgs[j])
      imgs[j].src=data["se-img"][i][j]
    }
  }
}