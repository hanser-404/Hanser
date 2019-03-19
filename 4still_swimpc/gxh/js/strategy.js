window.onload = function() {

    //
    var okkc1 = {
        "ock": ["普吉岛", "长滩岛", "济州", "伦敦", "利物浦", "东京", "马尔代夫"],
        "uiw": ["安达曼的明珠", "蜜月梦幻圣地", "蜜月旅拍都来这儿", "英式异域风情", " 东南亚的天使城", "霓虹下的怀旧地", "邂逅欧巴看这里"],

    }
    var ask = document.getElementsByClassName("ask");
    var yqw = document.getElementsByClassName("yqw");
    for (i = 0; i < ask.length; i++) {
        ask[i].innerHTML = okkc1.ock[i];
    }
    for (i = 0; i < yqw.length; i++) {
        yqw[i].innerHTML = okkc1.uiw[i];
    }





    // 月度推荐
    var mmJson = [{ title: ["新西兰", "新西兰", "新西兰", "新西兰", "新西兰"], img: [1, 1, 1, 1, 1], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["瑞典", "瑞典", "瑞典", "瑞典", "瑞典"], img: [2, 2, 2, 2, 2], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["济州岛", "济州岛", "济州岛", "济州岛", "济州岛"], img: [3, 3, 3, 3, 3], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["台湾垦丁", "台湾垦丁", "台湾垦丁", "台湾垦丁", "台湾垦丁"], img: [4, 4, 4, 4, 4], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["捷克", "捷克", "捷克", "捷克", "捷克"], img: [5, 5, 5, 5, 5], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["桑坦尼亚", "桑坦尼亚", "桑坦尼亚", "桑坦尼亚", "桑坦尼亚"], img: [6, 6, 6, 6, 6], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["挪威", "挪威", "挪威", "挪威", "挪威"], img: [7, 7, 7, 7, 7], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["俄罗斯贝加尔湖", "俄罗斯贝加尔湖", "俄罗斯贝加尔湖", "俄罗斯贝加尔湖", "俄罗斯贝加尔湖"], img: [8, 8, 8, 8, 8], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["意大利米兰", "意大利米兰", "意大利米兰", "意大利米兰", "意大利米兰"], img: [9, 9, 9, 9, 9], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["瑞士", "瑞士", "瑞士", "瑞士", "瑞士"], img: [10, 10, 10, 10, 10], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["马尔代夫 ", "马尔代夫  ", "马尔代夫 ", "马尔代夫  ", "马尔代夫 "], img: [11, 11, 11, 11, 11], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
        { title: ["台北", "台北", "台北", "台北", "台北"], img: [12, 12, 12, 12, 12], main: ["在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。", "在北半球处于寒冷的冬季的时候，南半球的新西兰正好春暖花开。"] },
    ]
    var mmUl1 = document.getElementById("mm-ul1");
    var mmLi1 = mmUl1.getElementsByTagName("li");
    var mmUl2 = document.getElementById("mm-ul2");
    for (var mm1 = 0; mm1 < mmJson[0].title.length; mm1++) {
        mmUl2.innerHTML += "<li class='mm-li2'><div class='mm-w'><p>" + mmJson[0].title[mm1] + "</p><span>" + mmJson[0].main[mm1] + "</span></div></li>";
        var mmLi2 = mmUl2.getElementsByTagName("li")[mm1];
        mmLi2.style.backgroundImage = "url(llq-img/des-b-" + mmJson[0].img[mm1] + ".jpg)";
        mmLi2 = null;
    }
    for (var mm2 = 0; mm2 < mmLi1.length; mm2++) {
        mmLi1[mm2].index = mm2;
        mmLi1[mm2].onclick = function() {
            for (var mm3 = 0; mm3 < mmLi1.length; mm3++) {
                mmLi1[mm3].className = "";
            }
            this.className = "mmOn";
            mmUl2.innerHTML = "";
            for (var mm4 = 0; mm4 < mmJson[0].title.length; mm4++) {
                mmUl2.innerHTML += "<li class='mm-li1'><div class='mm-w'><p>" + mmJson[this.index].title[mm4] + "</p><span>" + mmJson[this.index].main[mm4] + "</span></div></li>";
                var mmLi2 = mmUl2.getElementsByTagName("li")[mm4];
                mmLi2.style.backgroundImage = "url(llq-img/des-b-" + mmJson[this.index].img[mm4] + ".jpg)";
            }
        }
    }

    //旅游
    var okkc = {
        "imgsw": ["img/爱彼迎/00b12c64-0851-40e7-83aa-6bba10221435.jpg", "du-img/datup/4FXWNz.jpg", "du-img/datup/okk.jpg"],
        "wbkbt": ["赴一场春天的绿色约会，把自己睡到自然里", "带父母看世界——甲米", "别再错过这些美景——云上飘着的川西高原"],
        "wbkzjbt": [" 写 川西 的文章不算少，有的虽然写得也很不错，但都过于程式化了。而我这次 川西 行，是跟着户外达人“懒人”走的非常规路线，所以游记有它的独特性：走 金川 古道的，看100多公里同时盛开...",
            " 前言 第三次刷 泰国 ，前两次去的普吉、 曼谷 、 芭提雅 ，可以翻一下历史游记。我在马蜂窝不愿意晒美图 和美 文，没什么分享价值。写游记的目的，不是为了登榜首，每次旅行前，都会整理攻...",
            "如果风有颜色，吹过的春天会不会变成五彩的泡泡，躺在舒适的云朵上，做一个带着阳光味道的美梦。 总说不能辜负春天，应该出去踏春，要去赏花，得去湖边看摇摇晃晃的鱼和天鹅，一年四季的奔波...",
        ],


    }
    var wbk = document.getElementById("wbk");
    var wbkh2 = wbk.getElementsByTagName("h2");
    var wbkspan = wbk.getElementsByTagName("span");

    for (i = 0; i < wbkh2.length; i++) {
        wbkh2[i].innerHTML = okkc.wbkbt[i];
    }
    for (i = 0; i < wbkspan.length; i++) {
        wbkspan[i].innerHTML = okkc.wbkzjbt[i];
    }
    var oksq = document.getElementsByClassName("oksq");
    var uiq = document.getElementsByClassName("uiq");


    for (a = 0; a < oksq.length; a++) {
        oksq[a].innerHTML = okkc.wbkbt[a + 1];
    }
    for (a = 0; a < uiq.length; a++) {
        uiq[a].innerHTML = okkc.wbkzjbt[a + 1];
    }


    var iso = document.getElementsByClassName("iconfont icon-dianzan");
    console.log(iso);

    for (var i = 0; i < iso.length; i++) {
        iso[i].onclick = function() {

            this.style.color = "#ffb000";




            // this.style.cursor = "pointer";
        }
    }


    var uimg = document.getElementsByClassName("uimg");
    for (b = 0; b < uimg.length; b++) {
        uimg[b].src = okkc.imgsw[b];
    }

};