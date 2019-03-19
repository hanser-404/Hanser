window.onload=function(){
	var information = {
		"center":["首页1.png","QQ图片20190306161458.png","420x2804.jpg","QQ图片20190306164637.png"],
		"date":["QQ图片20190306164705.png","QQ图片20190306201237.png","420x2801.jpg","15155016743421.jpg"]
	}
	var img = y_iteration.getElementsByTagName('img');
	for(var i=0;i<img.length;i++){
		img[i].src="Imag/"+information.center[i];
	}
	var img2 = y_date.getElementsByTagName('img');
	for(var i=0;i<img2.length;i++){
		img2[i].src="Imag/"+information.date[i];
	}
}