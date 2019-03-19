window.onload=function(){
	var information = {
		"nav":["QQ图片20190307190228.png","QQ图片20190307190340.png","QQ图片20190307190440.png","QQ图片20190307190228.png","QQ图片20190307190612.png"]
	}
	var nav = document.getElementsByTagName('nav');
	var img = nav[0].getElementsByTagName('img')
	for(var i=0;i<img.length;i++){
		img[i].src="Imag/"+information.nav[i];
	}
}