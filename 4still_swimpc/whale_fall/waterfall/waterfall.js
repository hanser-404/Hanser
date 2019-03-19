var data = [
  "img/0.jpg",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg",
  "img/11.jpg",
  "img/12.jpg",
  "img/13.jpg",
  "img/14.jpg",
  "img/15.jpg",
  "img/16.jpg",
  "img/17.jpg",
  "img/18.jpg",
  "img/19.jpg",
  "img/20.jpg",
]
window.onscroll = function () {
  // 页面总高度
  var bodyHeight = document.documentElement.offsetHeight;
  // 可视区高度
  var windowHeight = document.documentElement.clientHeight;
  //滚动条的高度
  var srcollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var srcollH = document.body.scrollHeight;
  // alert(srcollH);

  if (srcollTop + windowHeight >= srcollH - 200) {
    createDiv();
  }
  ;
}

createDiv()
createDiv()

//生产图片
function createDiv() {
  for (var i = 0, da = data.length; i < da; i++) {
    var imgs = document.createElement('img');
    var rnd = Math.floor(Math.random() * 150 + 150)   //div的高度在50到350之间
    imgs.style.height = rnd + "px";
    imgs.src = data[i]
    document.body.appendChild(imgs);
  }
  change()
}


function change() {
  var imgs = document.getElementsByTagName('img');
  // alert(imgs.length);
  var windowCW = document.documentElement.clientWidth; //窗口视口的宽度
  var n = Math.floor(windowCW / 210);                  //一行能容纳多少个div，并向下取整
  var t = 0;
  var center = (windowCW - n * 210) / 2;               //居中
  var arrH = [];                                     //定义一个数组存放div的高度
  for (var i = 0; i < imgs.length; i++) {
    var j = i % n;

    if (arrH.length == n) {                //一行排满n个后到下一行
      var min = findMin(arrH);              //从最“矮”的排起，可以从下图的序号中看得出来，下一行中序号是从矮到高排列的
      imgs[i].style.left = center + min * 210 + "px";
      imgs[i].style.top = arrH[min] + 10 + "px";
      arrH[min] += imgs[i].offsetHeight + 10;
      // alert(min);
    } else {
      arrH[j] = imgs[i].offsetHeight;
      imgs[i].style.left = center + 200 * j + 10 * j + "px";
      imgs[i].style.top = 0;
    }

  }
}

// window.onresize = function(){      //窗口改变也调用函数
//   change();
// }
//取出最低盒子
function findMin(arr) {
  var m = 0;
  for (var i = 0; i < arr.length; i++) {
    // m = Math.min(arr[m], arr[i]) == arr[m] ? m : i;
    m = arr[m] < arr[i] ? m : i;
  }
  return m;
}