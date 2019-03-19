window.onload = function () {
  var data = {
    "round": ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/1.jpg"],
    "conTop": ["策划专题", "做自己的策划，规划世界", "特别策划"],
    "section": [
      ["img/4.jpg", "CHAO向未来：多维现代生活体验", "立即查看"],
      ["img/4.1.jpg", "（半干货2018小长线150天）", "立即查看"],
      ["img/4.2.jpg", "从东欧到东南亚，从巴尔干铁路口岸到陆路","立即查看"],
      ["img/4.9.jpg", "，嘿大家一起来刷章。", "立即查看"],
      ["img/4.4.jpg", "葡萄夫妇游日本【枫叶季超强实用攻略】", "立即查看"],
      ["img/4.5.jpg", "福冈|佐贺|鹿儿岛|指宿|熊本|由布院", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.7.jpg", "有生之年，一定要自驾一把大洋路，", "立即查看"],
      ["img/4.8.jpg", "上一次袋鼠岛，看一眼粉红湖", "立即查看"],

      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.91.jpg", "小清新环岛行」- 5万元626天环游亚洲 硬核之路", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.91.jpg", "小清新环岛行」- 5万元626天环游亚洲 硬核之路", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.91.jpg", "小清新环岛行」- 5万元626天环游亚洲 硬核之路", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],

      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],
      ["img/4.6.jpg", "附赠大久野岛详细攻略", "立即查看"],

      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],
      ["img/4.92.jpg", "24岁，我在瑞士欣赏漫天飞雪,海量美图", "立即查看"],

      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],
      ["img/4.9.jpg", "【X的旅程】（第七章 ）「斯里兰卡篇  ", "立即查看"],

      ["img/4.1.jpg", "（半干货2018小长线150天）", "立即查看"],
      ["img/4.1.jpg", "（半干货2018小长线150天）", "立即查看"],
      ["img/4.1.jpg", "（半干货2018小长线150天）", "立即查看"],
      ["img/4.1.jpg", "（半干货2018小长线150天）", "立即查看"],
      ["img/4.1.jpg", "（半干货2018小长线150天）", "立即查看"]
    ]
  }
  //传main
  var section = document.querySelectorAll(".section")
  var paginBut = document.getElementById("paginBut");
  var pagas = paginBut.querySelectorAll("a");
  pagas[0].className = "gsddg"
  for (var i = 0; i < pagas.length; i++) {
    pagas[i].index = i;
    pagas[i].onclick = function () {
      for (var j = 0; j < 9; j++) {
        if (this.index * 9 + j>=data.section.length){
          section[j].innerHTML=""
        }else{
          section[j].innerHTML="<img src="
          +data.section[this.index * 9 + j][0]+"><p>"
          +data.section[this.index * 9 + j][1]+"</p><div>"
          +data.section[this.index * 9 + j][2]+"</div>"
        }
      }
      for (var k = 0; k < 6; k++) {
        pagas[k].className = ""//清空类
      }
      this.className = "pagcol"//添加颜色
    }
    pagas [0].onclick();
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
  //添加顶部信息
  for (var i = 0; i < data.conTop.length; i++) {
    document.querySelectorAll(".con-top>a")[i].innerText = data.conTop[i]
  }


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
  //设置navDiv的left值
  navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
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
    }, 3000)
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