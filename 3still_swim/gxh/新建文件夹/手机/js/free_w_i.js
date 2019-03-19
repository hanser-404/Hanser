window.onload = function() {
	var information = {
		"p":["【预售至19年6月丨拒签全退】全国出发至土耳其伊斯坦布尔6-30天自由行(赠中文接机或送机/赠签证/赠1晚酒店/代订土耳其境内段飞机/升级商务舱)",
		"飞·舒适｜优选南航直飞航班，A330-300执飞，舒适性高，可配全国联运。",
		"行·安全｜拒签全退，赠送签证+酒店+接机+目的地中文咨询+管家一站式服务。",
		"宿·精选｜伊斯坦布尔老城中心地带，毗邻圣索菲亚大教堂、蓝色清真寺。",
		"游·愉悦｜行程日期自由选择，套餐价格低于市场价格。"],
		"h5":"4499元起"
	}
	var ps = document.getElementsByTagName('p');
	var hs = document.getElementsByTagName('h5');
	for(var i =0;i<ps.length;i++){
		ps[i].innerHTML=information.p[i];
	}
	hs[0].innerHTML=information.h5
}