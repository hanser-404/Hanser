//切换登录
window.onload = function () {
  //获取短信登录按钮
  var a = document.getElementsByClassName("ml-tab-right");
  //获取短信和密码登录框
  var b = document.getElementsByClassName("ml-group");
  //获得密码登录按钮
  var c = document.getElementsByClassName("ml-tab-left");

  a[0].onclick = function(){
      b[1].style.display = "block";
      b[0].style.display = "none";
      a[0].className = "ml-tab-right "+"active";
      c[0].className = "ml-tab-left";
  }
  c[0].onclick = function(){
      b[0].style.display = "block";
      b[1].style.display = "none";
      c[0].className = "ml-tab-left "+"active";
      a[0].className = "ml-tab-right";
  }

  //点击登录按钮
  document.querySelector(".ml-button-group>.dl-button").onclick = function () {
    if (document.querySelector("#zhk").value!=="" && document.getElementById("mmk").value!==""){
      window.location.href = "../ykw/index.html"
    }else{
      alert("账号或密码不能为空")
    }
  }
//点击注册按钮
  document.querySelector(".ml-button-group>.zc-button").onclick = function () {
    window.location.href = "../whale_fall/register/register.html";
  }
}