window.onload=function(){
	function test(){
		y_d1.style.transform='scale(1)';	
		y_d1.style.opacity='1'
	}
	window.onscroll=function test2(){
		var t = document.documentElement.scrollTop;
		if (t>=260) {
			y_d2.style.transform='scale(1)';
			y_d2.style.opacity='1';	
		}else{
			y_d2.style.transform='scale(0)';
			y_d2.style.opacity='0';	
		}
	}
	window.setTimeout(test,800);
}