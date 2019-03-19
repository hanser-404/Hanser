window.onload = function () {

    //获取imgList
    var imgList = document.getElementById("imgList");
    //获取页面中所有的img标签
    var imgArr = imgList.getElementsByTagName("img");
    //设置imgList的宽度
    imgList.style.width = 1400 * imgArr.length + "px";

    //设置导航按钮居中
    //获取navDiv
    var navDiv = document.getElementById("navDiv");
    //获取outer
    var outer = document.getElementById("outer");
    //设置navDiv的left值
    navDiv.style.left = (outer.offsetWidth - navDiv.offsetWidth) / 2 + "px";
    // alert(navDiv.offsetWidth)


    //默认显示图片的索引
    var index = 0;

    //获取所有的a
    var allA = navDiv.getElementsByTagName("a");

    //设置默认选中的效果
    allA[index].style.backgroundColor = "black";


    // 为所有的超链接绑定单击响应函数
    for (var i = 0; i < allA.length; i++) {
        //为每一个超链接都添加一个num属性   
        allA[i].num = i;
        //为超链接绑定单击响应函数
        allA[i].onclick = function () {

            //关闭定时器播放
            clearInterval(timer);

            //获取点击超链接的索引
            index = this.num;

            //切换图片
            // imgList.style.left = -520 * index + "px";

            setA();

            //使用move函数来切换图片
            move(imgList, "left", -1400 * index, 10, function () {
                //动画执行完毕，开启自动切换
                autoChange();
            })

        }
    }

    //开启自动切换图片
    autoChange();
    //创建一个方法用来设置选中的a
    function setA() {

        //判断当前索引是否是最后一张图片
        if (index >= imgArr.length - 1) {
            //则将index设置为0
            index = 0;

            //此时显示的最后一张图片，而最后一张图片和第一张是一模一样
            //通过CSS将最后一张切换成第一张
            imgList.style.left = 0;
        }


        //遍历所有的a，并将它们的背景颜色设置为红色
        for (var i = 0; i < allA.length; i++) {
            allA[i].style.backgroundColor = "";
        };
        //将选中的a设置为黑色
        allA[index].style.backgroundColor = "black";
    };


    //定义一个自动切换的定时器的标识
    var timer;

    //创建一个函数，用来开启自动切换图片
    function autoChange() {
        //开启一个定时器，用来顶死切换图片
        timer = setInterval(function () {
            //使索引自增
            index++;

            //判断index的值
            index %= imgArr.length;

            //执行动画，切换图片
            move(imgList, "left", -1400 * index, 10, function () {
                //修改导航按钮
                setA();
            })
        }, 5000);
    }

    function move(obj, attr, target, speed, callback) {

        //关闭上一个定时器
        clearInterval(obj.timer);

        //获取元素目前位置
        var current = parseInt(getStyle(obj, attr));

        //判断速度得正负值
        //如果从0向800移动，则speed为正
        //如果从800向0移动，则speed为负
        if (current > target) {
            //此时速度应为负值
            speed = -speed;
        }


        //开启一个定时器，用来执行动画效果

        obj.timer = setInterval(function () {
            //获取box1的原来的left值
            var oldValue = parseInt(getStyle(obj, attr));

            //在旧值得基础上增加
            var newValue = oldValue + speed;

            //判断newValue是否大于800
            //从800向0移动
            //向左移动需要判断newValue是否小于target
            //向右移动需要判断newValue是否大于target
            if ((speed < 0 && newValue < target) || (speed > 0 && newValue > target)) {
                newValue = target;
            }

            //讲新值设置给box1
            obj.style[attr] = newValue + "PX";

            //当元素移动到0px时，使其停止行动
            if (newValue == target) {
                //达到目标，关闭定时器
                clearInterval(obj.timer);
                //动画执行完毕，调用回调函数
                callback && callback();
            }

        }, 30);
    }

    function getStyle(obj, name) {

        return window.getComputedStyle ? getComputedStyle(obj, null)[name] : obj.currentStyle[name];
    }
    var a = {
        "img":["img/爱彼迎/96ec935a-91aa-4795-a616-87e4bf869927.jpg","img/爱彼迎/910ef0d0-0871-436e-aef8-2a44d1af66a7 (1).jpg",
        "img/爱彼迎/931c8ced-a8d0-4aa2-8b8c-138938006feb.jpg","img/爱彼迎/d1316854-23e4-4db8-9f13-2a4cc3b835a6.jpg",
        "img/爱彼迎/96ec935a-91aa-4795-a616-87e4bf869927.jpg","img/爱彼迎/910ef0d0-0871-436e-aef8-2a44d1af66a7 (1).jpg",
        "img/爱彼迎/931c8ced-a8d0-4aa2-8b8c-138938006feb.jpg","img/爱彼迎/d1316854-23e4-4db8-9f13-2a4cc3b835a6.jpg",],
        "p":["百年的苏格兰，成为英国绅士的必备条件"],
        "p1":["会玩的中国人"]
    }
    var b = document.getElementById("gxh4-2-1-1");
    var f = document.getElementById("gxh4-2-1-2");
    var g = document.getElementById("gxh4-2-1-3");
    var c = b.getElementsByTagName("img");
    var k = f.getElementsByTagName("img");
    var h = g.getElementsByTagName("img");
    var d = document.getElementsByClassName("gxh-ppt1");
    var e = document.getElementsByClassName("gxh-ppt2");
    for(var i = 0;i<c.length;i++){
        c[i].src = a.img[i];
    }
    for(var i =0;i<d.length;i++){
        d[i].innerHTML = a.p[0];
    }
    for(var i =0;i<e.length;i++){
        e[i].innerHTML = a.p1[0];
    }
    for(var i = 0;i<k.length;i++){
        k[i].src = a.img[i];
    }
    for(var i = 0;i<h.length;i++){
        h[i].src = a.img[i];
    }
}