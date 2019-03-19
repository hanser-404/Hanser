window.onload = function() {
	var information = {
		"center": ["QQ图片20190307100312.png", "QQ图片20190307100319.png", "QQ图片20190307100326.png", "QQ图片20190307100332.png"],
		"cen": [{ "img": "QQ图片20190307100319.png", "span": ["你看这屁股多大多圆，现在带走", "126元起"] },
		{ "img": "QQ图片20190307100913.png", "span": ["去日本看樱花·女神节优惠最高立减700", "4299元起"] },
		{ "img": "QQ图片20190307100332.png", "span": ["君不见换个智商税，奔流到海不复返", "4399元起"] }]
	}
	// 轮播图数据
	var img = y_iteration.getElementsByTagName('img');
	for (var i = 0; i < img.length; i++) {
		img[i].src = "Imag/" + information.center[i];
	}
    // var imgs = document.getElementsByClassName('imgs');
    // var spans = document.getElementsByClassName('spans');

    var imgs = new Array;
    var spans = new Array;
    var centers = document.getElementsByClassName('center');
    // 遍历每个数据框里的图片和字，放入数组
    for (var i = 0; i < centers.length; i++) {
    	imgs[i] = centers[i].getElementsByClassName('imgs');
    	spans[i] = centers[i].getElementsByClassName('spans');
    }
    // 遍历每个数据框里的每个图片的字，数据放入
    for (var i = 0; i < centers.length; i++) {
    	imgs[i][0].src = "Imag/" + information.cen[i].img;
    	// var index = i;
    	for (var j = 0; j < information.cen[i].span.length; j++) {
    		spans[i][j].innerHTML = information.cen[i].span[j];
    	}
    }
}