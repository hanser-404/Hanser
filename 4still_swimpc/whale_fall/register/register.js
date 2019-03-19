window.onload = function () {
  var ins = document.querySelectorAll("input")
  var sps = document.querySelectorAll("span")
  var strong = document.querySelector(".strong i")

  //判断账号
  ins[0].onchange = function () {
    if (ins[0].value.length >= 6 && ins[0].value.length <= 14) {
      sps[0].innerHTML = '√'
    } else {
      sps[0].innerHTML = '请输入6到14个字符'
    }
  }

  // 正则a-zA-Z的内容
  var regStr = /[a-zA-Z]/;
  // 正则0-9的内容
  var regNum = /[0-9]/;
  // 特殊字符
  var fStrNum = /\W/;
  //判断密码
  ins[1].oninput = function () {
    if (ins[1].value.length < 6 || ins[0].value.length > 14) {
      sps[1].innerHTML = '请输入6到14个字符'
    } else {
      sps[1].innerHTML = '√'
    }
    if (regNum.test(ins[1].value) || regStr.test(ins[1].value)) {
      strong.style.backgroundColor = "red"
    }
    if (regNum.test(ins[1].value) && regStr.test(ins[1].value)) {
      strong.style.backgroundColor = "#ffc24e"
    }
    if (regNum.test(ins[1].value) && regStr.test(ins[1].value) && fStrNum.test(ins[1].value)) {
      strong.style.backgroundColor = "#00ff06"
    }
  }
  //判断二次密码
  ins[2].onchange = function () {
    if (ins[2].value == ins[1].value) {
      sps[2].innerHTML = '√'
    } else {
      sps[2].innerHTML = '两次密码不一致'
    }
  }
  //生成验证码
  sps[3].innerHTML = yzm()
  sps[3].onclick = function () {
    sps[3].innerHTML = yzm()
  }

  //注册
  ins[4].onclick = function () {
    console.log(ins[0].innerHTML)
    console.log(typeof ins[0].innerHTML)
    if ((sps[0].innerHTML == '√') && (sps[1].innerHTML == '√') && (sps[2].innerHTML == '√') && (sps[3].innerHTML == sps[3].innerHTML)) {
      alert("注册成功")
      window.location.href = "../login/login.html"
      // window.event.returnValue=false
    } else {
      alert("请正确填写信息")
    }
  }

  //生产验证码函数
  function yzm() {
    var yzm = '';
    var yzmk = "abcdefghijklmnopqrstuvwxyz1234567890"
    for (var i = 0; i < 4; i++) {
      yzm += yzmk[parseInt(Math.random() * 100) % yzmk.length]
    }
    return yzm;
  }

  //放大镜特效
  //监听鼠标移入图片
  // function $(id) {
  //   return typeof id === "string" ? document.getElementById(id) : null;
  // }
  // $("sImg").onmouseover = function() {
  //   //鼠标移入定时器停止
  //   // clearInterval(timer);
  //   $("zb").style.display = "block";
  //   $("bImg").style.display = "block";
  //
  //   //监听鼠标移动
  //   $("sImg").onmousemove = function(event) {
  //     //兼容IE
  //     var event = event || window.event;
  //     //获取鼠标的坐标
  //     var pointX =
  //       event.clientX -
  //       $("sImg").offsetParent.offsetLeft -
  //       $("zb").offsetWidth * 0.5;
  //     var pointY =
  //       event.clientY -
  //       $("sImg").offsetParent.offsetTop -
  //       $("zb").offsetHeight * 0.5;
  //     //边界处理
  //     if (pointX < 0) {
  //       pointX = 0;
  //     } else if (pointX >= $("sImg").offsetWidth - $("zb").offsetWidth) {
  //       pointX = $("sImg").offsetWidth - $("zb").offsetWidth;
  //     }
  //     if (pointY < 0) {
  //       pointY = 0;
  //     } else if (pointY >= $("sImg").offsetHeight - $("zb").offsetHeight) {
  //       pointY = $("sImg").offsetHeight - $("zb").offsetHeight;
  //     }
  //     //将小黄标根据坐标定位
  //     $("zb").style.left = pointX + "px";
  //     $("zb").style.top = pointY + "px";
  //     //右侧大图移动
  //     //小图位置/大图位置=小图宽度/大图宽度
  //     $("bImg").getElementsByTagName("img")[0].style.left =
  //       -pointX / ($("sImg").offsetWidth / $("bImg").offsetWidth) + "px";
  //     $("bImg").getElementsByTagName("img")[0].style.top =
  //       -pointY / ($("sImg").offsetHeight / $("bImg").offsetHeight) + "px";
  //   };
  // };
}