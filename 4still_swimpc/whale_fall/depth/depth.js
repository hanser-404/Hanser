window.onload = function () {
  var data = {
    "round": ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/1.jpg"],
    "nav": [["img/8.jpg", "自然风光"], ["img/7.jpg", "自然风光"], ["img/6.jpg", "自然风光"]],
    "single": ["独家日游", "小团队，深度讲解，专业领队，像当地人一样旅行"],
    "section": ["img/9.jpg", "在这里你可以了解最全的泰北旅行资讯，也可以参加厨艺学校、泰北手工、亲子游等特色活动体验本地风情，夜晚还可以留宿在Q-House。", "img/10.jpg", "img/11.jpg"],
    "section1": ["img/13.jpg", "【澳洲·悉尼】从初春到盛夏的3个月里", "img/14.jpg", "我走过的悉尼及周边小众私藏玩处", "img/15.jpg"],
    "measure": "img/12.jpg"
  }

  //添加轮播图的图片和按钮
  var imgList = document.querySelector("#imgList")
  var navDiv = document.querySelector("#navDiv")
  for (var i = 0; i < data.round.length; i++) {
    imgList.innerHTML += "<li><img src=\"" + data.round[i] + "\"/></li>"
    if (i !== 0) {
      navDiv.innerHTML += "<a href=\"javascript:;\">" + i + "</a>"
    }
  }
  //传导航栏的信息
  var nav = document.querySelector(".nav")
  for (var i = 0; i < data.nav.length; i++) {
    nav.innerHTML += "<div><img src=\""
      + data.nav[i][0] + "\" alt=\"\"><a href=\"#\">"
      + data.nav[i][1] + "</a></div>"
  }
  //传导航栏下面的文字
  document.querySelector(".single").innerHTML = "<p>" + data.single[0] + "</p><p>" + data.single[1] + "</p>"
  //
  var section = document.querySelector(".section")
  section.innerHTML += "<div class=\"sec-l\"><img src=\""
    + data.section[0] + "\" alt=\"\"></div><div class=\"sec-r\"><p>"
    + data.section[1] + "</p><img src=\""
    + data.section[2] + "\" alt=\"\"><img src=\""
    + data.section[3] + "\" alt=\"\"></div>"
  //
  var section1 = document.querySelector(".section1")
  section1.innerHTML += "<div class=\"sec-l sec-rr\"><img src=\""
    + data.section1[0] + "\" alt=\"\"></div><div class=\"sec-r  sec-ll\"><p>"
    + data.section1[1] + "</p><img src=\""
    + data.section1[2] + "\" alt=\"\"><p>"
    + data.section1[3] + "</p><img src=\""
    + data.section1[4] + "\" alt=\"\"></div>"


  //整个轮播图id
  var outer = document.getElementById("outer")
  //获取imgList
  var imgList = outer.querySelector("#imgList");
  //获取页面中所有的img标签
  var imgArr = outer.getElementsByTagName("img");
  //设置imgList的宽度
  imgList.style.width = 980 * imgArr.length + "px";
  /*设置导航按钮居中*/
  //获取navDiv
  var navDiv = document.getElementById("navDiv");
  //默认显示图片的索引
  var index = 0;
  //获取所有的a
  var allA = outer.querySelectorAll("#navDiv>a");
  //设置默认选中的效果
  allA[index].style.backgroundColor = "black";
  /*
     点击超链接切换到指定的图片
       点击第一个超链接，显示第一个图片
       点击第二个超链接，显示第二个图片
   * */
  //为所有的超链接都绑定单击响应函数
  for (var i = 0; i < allA.length; i++) {
    //为每一个超链接都添加一个num属性
    allA[i].num = i;
    //为超链接绑定单击响应函数
    allA[i].onclick = function () {
      //关闭定时器
      clearInterval(timer)
      //获取点击超链接的索引,并将其设置为index
      index = this.num;
      //imgList.style.left = -520*index + "px";
      //设置选中的a
      setA();
      //使用move函数来切换图片
      move(imgList, "left", -980 * index, 2000, function () {
        //动画执行完闭，开启定时器
        autoChange();
      });
    };
  }
  autoChange()

  //创建一个方法用来设置选中的a
  function setA() {
    //判断是不是到最后一张图片
    if (index >= imgArr.length - 1) {
      index = 0;
      imgList.style.left = 0
    }

    //遍历所有a，并将它们的背景颜色设置为红色
    for (var i = 0; i < allA.length; i++) {
      allA[i].style.backgroundColor = "";
    }
    //将选中的a设置为黑色
    allA[index].style.backgroundColor = "black";
  };

  var timer;

  //开启轮播的定时器
  function autoChange() {

    timer = setInterval(function () {
      index++;
      // index%=imgArr.length;
      move(imgList, "left", -980 * index, 20, function () {
        setA();
      });
    }, 2000)
  }


};


//尝试创建一个可以执行简单动画的函数
/*
 * 参数：
 * 	obj:要执行动画的对象
 * 	attr:要执行动画的样式，比如：left top width height
 * 	target:执行动画的目标位置
 * 	speed:移动的速度(正数向右移动，负数向左移动)
 *  callback:回调函数，这个函数将会在动画执行完毕以后执行
 */
function move(obj, attr, target, speed, callback) {
  //关闭上一个定时器
  clearInterval(obj.timer);
  //获取元素目前的位置
  var current = parseInt(getStyle(obj, attr));
  //判断速度的正负值
  //如果从0 向 800移动，则speed为正
  //如果从800向0移动，则speed为负
  if (current > target) {
    //此时速度应为负值
    speed = -speed;
  }
  //开启一个定时器，用来执行动画效果
  //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
  obj.timer = setInterval(function () {
    //获取box1的原来的left值
    var oldValue = parseInt(getStyle(obj, attr));
    //在旧值的基础上增加
    var newValue = oldValue + speed;
    //判断newValue是否大于800
    //从800 向 0移动
    //向左移动时，需要判断newValue是否小于target
    //向右移动时，需要判断newValue是否大于target
    if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
      newValue = target;
    }
    //将新值设置给box1
    obj.style[attr] = newValue + "px";
    //当元素移动到0px时，使其停止执行动画
    if (newValue == target) {
      //达到目标，关闭定时器
      clearInterval(obj.timer);
      //动画执行完毕，调用回调函数
      callback && callback();
    }

  }, 30);
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