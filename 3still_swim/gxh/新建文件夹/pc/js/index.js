window.onload = function() {
    var x = y_box1.getElementsByTagName('img');
    // 鼠标移到轮播图盒子上关闭计时器
    $("#y_box1").mouseenter(function() {
        window.clearInterval(sure);
    })
    // 鼠标移开时执行播放方法
    $("#y_box1").mouseout(function() {
        star();
    })
    // 序号，从零开始
    var ord = 0;
    // 向右播放
    function right() {
        let ords = ord;
        ord++;
        if (ord > x.length - 1) {
            ord = 0;
        }
        // 轮播图集合
        let $img = $("#y_box1 img")
        // x[ords].className="xiu";
        $img.eq(ords).animate({
            opacity: "0"
        }, 500)
        // x[ords].animate({
        // 	opacity:"0"
        // })
        $img.eq(ord).animate({
            opacity: "1"
        }, 500)
    }
    // 向左播放
    function left() {
        let ords = ord;
        ord--;
        if (ord < 0) {
            ord = x.length - 1;
        }
        // 轮播图集合
        let $img = $("#y_box1 img");
        $img.eq(ords).animate({
            opacity: "0"
        }, 500)
        $img.eq(ord).animate({
            opacity: "1"
        }, 500)
    }
    // 播放
    function star() {
        // 轮播图的计时器
        sure = setInterval(right, 3000)
    }
    var ri = document.getElementById('right');
    var le = document.getElementById('left');
    // 点击下一张
    ri.onclick = function() {
        right();
        window.clearInterval(sure);
        star();
    }
    // 点击上一张
    le.onclick = function() {
        left();
        window.clearInterval(sure);
        star();
    }
    // 页面加载完自运行播放
    star();
}