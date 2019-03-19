var information = {
	"account": ["admin", "hanser"],
	"password": ["admin", "12345"]
}
window.onload = function() {
	var ins = document.getElementsByTagName('input');//获取输入文本框
	function set(y){
		se.innerHTML=y
		$("#se").animate({
			bottom: '-30px',
			opacity: '1',
		});
	} 
	login.onclick = function(){
		se.style.opacity="0";
		var ins = document.getElementsByTagName('input');//获取输入文本框
		// 遍历账号数据库
		for (var i = 0; i < information.account.length; i++) {
			// 如果账号密码都正确
			if (ins[0].value == information.account[i] && ins[1].value == information.password[i]) {
				window.location.href="../../Kenv/index.html"
			}
			// 非空判断
			else if(ins[0].value =="" || ins[1].value ==""){
				set("账号或密码不能为空");
				break;
			}
			// 密码错误
			else if(ins[0].value == information.account[i] && ins[1].value != information.password[i]){
				set("密码错误");
				break;
			}
			// 账号为空号
			else{
				console.log(ins[0].value)
				console.log(ins[1].value)
				set("没有该账号");
				break;
			}
		}
	}
}