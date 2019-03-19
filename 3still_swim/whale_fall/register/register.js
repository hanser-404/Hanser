window.onload = function () {
  var data = {
    round: [
      "../img/列车.png",
      "../img/发现.png",
      "../img/法属.png",
      "../img/签证.png",
      "../img/海滩.png",
      "../img/列车.png"
    ]
  }
  //传轮播图数据
  var imgList = document.querySelector(".imgList")//获取轮播图盒子
  for (var i = 0, ro = data.round.length; i < ro; i++) {
    imgList.innerHTML += "<img src=" + data.round[i] + ">"
    // var im=document.createElement("img")
    // im.src=data.round[i]
    // imgList.appendChild(im)
  }

  var fo = document.querySelector("form")
  var ins = fo.querySelectorAll("input")
  var sps = fo.querySelectorAll("span")
  var strong = fo.querySelector(".strong i")

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
  ins[1].onchange = function () {
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
    if ((sps[0].innerHTML == '√') && (sps[1].innerHTML == '√') && (sps[2].innerHTML == '√') && (sps[3].innerHTML.toLowerCase() === sps[3].innerHTML)) {
      window.location.href = "../../lpy/login.html"
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
}