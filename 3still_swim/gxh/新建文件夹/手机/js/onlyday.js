window.onload=function(){
	var information = {
		"cen":[{"img":["420x2801.jpg","420x2801.jpg","420x280.jpg"]},{"span":["可以是单行","【City Walk】漫步静安 - 十字街头"]}],
		"cen2":[{"p":["上海","长沙"]},{"img":["QQ图片20190307095150.png","QQ图片20190307100913.png"]},{"span":["科学会堂 - 走过1914的田野文明","飞马援救 - 现在就来"]}]
	}
	var cen = document.getElementsByTagName('center');
	var img = cen[0].getElementsByTagName('img');
	var span = cen[0].getElementsByTagName('span');
	var ps = document.getElementsByClassName('ps');	
	var imgs = document.getElementsByClassName('imgs');
	var spans = document.getElementsByClassName('spans');
	for(var i=0;i<imgs.length;i++){
		imgs[i].src="Imag/"+information.cen2[1].img[i]
	}
	for(var i=0;i<spans.length;i++){
		spans[i].innerHTML=information.cen2[2].span[i]
	}
	for(var i=0;i<ps.length;i++){
		ps[i]	.innerHTML=information.cen2[0].p[i]
	}


	for(var i=0;i<img.length;i++){
		img[i].src="Imag/"+information.cen[0].img[i]
	}
	for(var i=0;i<span.length;i++){
		span[i].innerHTML=information.cen[1].span[i]
	}
	// for(var i=0;i<imgs.length;i++){
	// 	imgs[i].src="Imag/"+information.cen2[1].img[i]
	// 	console.log(imgs[i])
	// 	console.log(imgs.length)
	// }
	// for(var i=0;i<spans.length;i++){
	// 	spans[i].innerHTML=information.cen2[2].span[i]
	// 	console.log(spans[i])
	// }
	// for(var i=0;i<ps.length;i++){
	// 	ps[i].innerHTML=information.cen2[0].p[i]
	// 	console.log(ps.length)
	// }
}