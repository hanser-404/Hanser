window.onload = function () {
    //轮播左侧视频
    var outer = document.getElementById("outer")
    var videoList = document.getElementById("videoList")
    var navDiv = document.getElementById("navDiv");
    var navDivP = navDiv.getElementsByTagName("p");
    var video = videoList.getElementsByTagName("video");
    if (video[0].paused == true) {
        // video[0].play();
        video[0].play();
    } else {
        video[0].play();
    }
    for (var i = 0, length = navDivP.length; i < length; i++) {
        navDivP[i].index = i;
        navDivP[i].className = "pp";
        navDivP[i].onclick = function () {
            videoList.style.top = -246 * this.index + "px";
            video[this.index].play();
            for (var i = 0, length = navDivP.length; i < length; i++) {
                navDivP[i].className = "pp";
            }
            navDivP[this.index].className += " red";
        }
    }
    //轮播右侧视频
    var outer1 = document.getElementById("outer1")
    var videoList1 = document.getElementById("videoList1")
    var navDiv1 = document.getElementById("navDiv1");
    var navDivP1 = navDiv1.getElementsByTagName("p");
    var video1 = videoList1.getElementsByTagName("video");
    if (video1[0].paused == true) {
        // video[0].play();
        video1[0].play();
    } else {
        video1[0].play();
    }
    for (var i = 0, length = navDivP1.length; i < length; i++) {
        navDivP1[i].index = i;
        navDivP1[i].className = "pp";
        navDivP1[i].onclick = function () {
            // alert(this.index)
            videoList1.style.top = -543 * this.index + "px";
            video1[this.index].play();
            // video1[this.index-1].pause();
            for (var i = 0, length = navDivP1.length; i < length; i++) {
                navDivP1[i].className = "pp";
            }
            navDivP1[this.index].className += " red";
        }
    }

    //创建和初始化地图函数：
    function initMap() {
        createMap(); //创建地图实例
        setMapEvent(); //设置地图事件
        addMapControl(); //向地图添加控件
        addMarker(); //向地图中添加marker
    }

    //创建地图函数：
    function createMap() {
        //在百度地图容器中new操作符创建一个地图实例,第二个参数主要为了防止选址时出现相关公交线路信息
        var map = new BMap.Map("dituContent", {enableMapClick: false});
        var point = new BMap.Point(120.11777, 30.227385); //定义一个中心点坐标
        map.centerAndZoom(point, 19); //设定地图的中心点和坐标并将地图显示在地图容器中,也就是地图初始化，后面是地图等级，等级越高越清晰
        window.map = map; //将map变量存储在全局
    }

    // 搜索省份
    select.onclick = function () {
        var c = document.getElementById("address").value;
        map.centerAndZoom(c, 12);
        window.map = map;
        // var map = new BMap.Map("allmap");

    }

    //地图事件设置函数：
    function setMapEvent() {
        map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
        map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
        map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
        map.enableKeyboard(); //启用键盘上下左右键移动地图
    }

    //地图控件添加函数：
    function addMapControl() {
        //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1});
        map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
    }

    //标注点数组
    var markerArr = [{
        title: ["杭州西湖", "位于杭州西湖区龙井路一号"],
        content: ["666", "250°", "743", "68", "101", "404"],
        point: "120.11777|30.227385",
        isOpen: 0,
        icon: {w: 300, sr: "http://lbsyun.baidu.com/jsdemo/img/fox.gif", h: 157, l: 0, t: 0, x: 6, lb: 5},
        color: "skyblue"
    },
        {
            title: ["雷峰塔", "杭州市西湖区南山路15号"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "120.155471|30.236751",
            isOpen: 0,
            icon: {
                w: 21,
                sr: "https://map-mobile-opnimg.cdn.bcebos.com/3e3446414da2860b27d4169450b2b1af.png",
                h: 21,
                l: 0,
                t: 0,
                x: 6,
                lb: 5
            },
            color: "green"
        },
        {
            title: ["西溪国家湿地公园", "浙江省杭州市西湖区天目山路518号"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "120.071534|30.272682",
            isOpen: 0,
            icon: {w: 21, sr: "http://map.baidu.com/image/us_cursor.gif", h: 21, l: 0, t: 0, x: 6, lb: 5},
            color: "#389"
        },
        {
            title: ["宝石山", "杭州市西湖区宝石四弄19号宝石流霞附近"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "120.150401|30.267806",
            isOpen: 0,
            icon: {
                w: 21,
                sr: "https://map-mobile-opnimg.cdn.bcebos.com/3e3446414da2860b27d4169450b2b1af.png",
                h: 21,
                l: 0,
                t: 0,
                x: 6,
                lb: 5
            },
            color: "#989"
        },
        {
            title: ["三台云水", "杭州市西湖区三台山路161号"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "120.141023|30.236359",
            isOpen: 0,
            icon: {w: 21, sr: "http://map.baidu.com/image/us_cursor.gif", h: 21, l: 0, t: 0, x: 6, lb: 5},
            color: "#756"
        },
        {
            title: ["橘子洲景区", "长沙市岳麓区橘子洲头2号"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "112.968664|28.192918",
            isOpen: 0,
            icon: {
                w: 21,
                sr: "https://map-mobile-opnimg.cdn.bcebos.com/3e3446414da2860b27d4169450b2b1af.png",
                h: 21,
                l: 0,
                t: 0,
                x: 6,
                lb: 5
            },
            color: "red"
        },
        {
            title: ["岳麓山国家重点风景名胜区", "湖南长沙市登高路58号"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "112.942696|28.189858",
            isOpen: 0,
            icon: {w: 21, sr: "http://map.baidu.com/image/us_cursor.gif", h: 21, l: 0, t: 0, x: 6, lb: 5},
            color: "skyblue"
        },
        {
            title: ["洋湖湿地公园", "岳麓区潇湘南路(近先导区规划展示馆)"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "112.937027|28.131941",
            isOpen: 0,
            icon: {
                w: 21,
                sr: "https://map-mobile-opnimg.cdn.bcebos.com/3e3446414da2860b27d4169450b2b1af.png",
                h: 21,
                l: 0,
                t: 0,
                x: 6,
                lb: 5
            },
            color: "green"
        },
        {
            title: ["梅溪湖公园", "长沙市岳麓区梅溪湖路"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "112.908578|28.197697",
            isOpen: 0,
            icon: {w: 21, sr: "http://map.baidu.com/image/us_cursor.gif", h: 21, l: 0, t: 0, x: 6, lb: 5},
            color: "#245"
        },
        {
            title: ["长沙生态动物园", "湖南省长沙市天心区暮云镇西湖村芙蓉南路气象局对面"],
            content: ["666", "250°", "743", "68", "101", "404"],
            point: "113.04056|28.108608",
            isOpen: 0,
            icon: {
                w: 21,
                sr: "https://map-mobile-opnimg.cdn.bcebos.com/3e3446414da2860b27d4169450b2b1af.png",
                h: 21,
                l: 0,
                t: 0,
                x: 6,
                lb: 5
            },
            color: "#3a3"
        }
    ];

    //创建marker
    function addMarker() {
        for (var i = 0; i < markerArr.length; i++) {
            // 抓取一个点的marker数据
            var json = markerArr[i];
            // 获取该数据对象的point属性并通过切割成数组来取出经纬度
            var p0 = json.point.split("|")[0];
            var p1 = json.point.split("|")[1];
            // 1 2 3 4 再来一次
            var point = new BMap.Point(p0, p1);

            var iconImg = createIcon(json.icon);
            var marker = new BMap.Marker(point, {icon: iconImg});
            // var iw = createInfoWindow(i);
            // label为地图上的字面提示
            var label = new BMap.Label(json.title[0], {"offset": new BMap.Size(json.icon.lb - json.icon.x + 10, -20)});
            // 设置marker里的label
            marker.setLabel(label);
            map.addOverlay(marker);
            // 设置label的样式
            label.setStyle({
                background: json.color,
                color: "#fff",
                padding: "5px 8px",
                // 本来是border-radius属性，-会被当成操作符，运用驼峰命名法，在这还可以用引号括起来。
                borderRadius: "3px",
                cursor: "pointer"
            });

            (function () {
                let index = i;
                // _iw为创建覆盖物的方法
                // var _iw = createInfoWindow(i);
                // 里面有坐标，地址图像和label方法
                var _marker = marker;


                // 给marker添加事件监听，点击时打开创建覆盖物
                _marker.addEventListener("click", function (e) {
                    //单击获取点击的经纬度 
                    var point = new BMap.Point(e.point.lng, e.point.lat);
                    var gc = new BMap.Geocoder();
                    // 不知道是个啥，反正莽就vans了
                    gc.getLocation(point, function (rs) {
                        var addComp = rs.addressComponents;
                        // 提取获取坐标的城市，为rush中渲染做判断
                        city = addComp.city;
                        // 重新渲染随机数，并获取值
                        rush(index);
                        var _iw = createInfoWindow(index);
                        _marker.openInfoWindow(_iw);
                        // 给创建覆物添加监听，打开时隐藏marker里的label
                        _iw.addEventListener("open", function () {
                            _marker.getLabel().hide();
                        })
                        // 给创建覆盖物添加监听，关闭覆盖时显示marker里的label
                        _iw.addEventListener("close", function () {
                            _marker.getLabel().show();
                        })
                    });

                });


                // 给label添加监听，点击时打开创建覆盖物；
                label.addEventListener("click", function (e) {
                    //单击获取点击的经纬度
                    var point = new BMap.Point(e.point.lng, e.point.lat);
                    var gc = new BMap.Geocoder();
                    // 不知道是个啥，反正莽就vans了
                    gc.getLocation(point, function (rs) {
                        var addComp = rs.addressComponents;
                        // 提取获取坐标的城市，为rush中渲染做判断
                        city = addComp.city;
                        // 重新渲染随机数，并获取值
                        rush(index);
                        var _iw = createInfoWindow(index);
                        _marker.openInfoWindow(_iw);
                        // 给创建覆物添加监听，打开时隐藏marker里的label
                        _iw.addEventListener("open", function () {
                            _marker.getLabel().hide();
                        })
                        // 给创建覆盖物添加监听，关闭覆盖时显示marker里的label
                        _iw.addEventListener("close", function () {
                            _marker.getLabel().show();
                        })
                    })
                })
                // ？？？？？
                if (!!json.isOpen) {
                    label.hide();
                    _marker.openInfoWindow(_iw);
                }
            })()
        }
    }


    //创建InfoWindow
    // InfoWindow信息窗口也是一种特殊的覆盖物，它可以展示更为丰富的文字和多媒体信息。注意：同一时刻只能有一个信息窗口在地图上打开。
    function createInfoWindow(i) {
        var json = markerArr[i];
        var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title[0] + "'>" +
            json.title[0] + "</b><div class='bdaddress'>" + json.title[1] + "<ul class='new'>" + "<li class='lis'>" +
            "<a class='as'>" + "CO₂:" + json.content[0] + "</a>" + "</li>" + "<li class='lis lis2'>" + "<a class='as'>" +
            "温度:" + json.content[1] + "</a>" + "</li>" + "<li class='lis lis3'>" + "<a class='as'>" + "湿度:" +
            json.content[2] + "</a>" + "</li>" + "<li class='lis b lis4'>" + "<a class='as'>" + "PM2.5:" + json.content[3] +
            "</a>" + "</li>" + "<li class='lis lis5 b'>" + "<a class='as'>" + "PM10:" + json.content[4] + "</a>" + "</li>" +
            "<li class='lis lis6 b'>" + "<a class='as'>" + "堵塞:" + json.content[5] + "</a>" + "</li>" + "</ul>" + "</div>");
        // + "</b><div class='iw_poi_content'>" + json.content + "</div>"
        return iw;
    }

    //创建一个Icon
    function createIcon(json) {
        // http://map.baidu.com/image/us_cursor.gif 绿
        var icon = new BMap.Icon(json.sr,
            new BMap.Size(json.w, json.h), {
                imageOffset: new BMap.Size(-json.l, -json.t),
                infoWindowOffset: new BMap.Size(json.lb + 5, 1),
                offset: new BMap.Size(json.x, json.h)
            })
        return icon;
    }

    // var dp = document.getElementsByClassName("BMap_Marker");
    // dp[i].onclick=function(){
    //     var as = dp.getElementsByClassName("as");
    //     for(var j=0;j<as.length;j++){
    //         as[j].innerHTML="666";
    //     }
    // }
    initMap(); //创建和初始化地图


    function times() {
        var dates = new Date(); //不多BB
        // 从上到下获取分别是年月日星期时分秒
        var years = dates.getFullYear();
        var months = dates.getMonth();
        var days = dates.getDate();
        var week = dates.getDay();
        var hours = dates.getHours();
        var minutes = dates.getMinutes();
        var seconds = dates.getSeconds();
        // 星期转换;
        switch (week) {
            case 0:
                weeks = "天";
                break;
            case 1:
                weeks = "一";
                break;
            case 2:
                weeks = "二";
                break;
            case 3:
                weeks = "三";
                break;
            case 4:
                weeks = "四";
                break;
            case 5:
                weeks = "五";
                break;
            case 6:
                weeks = "六";
                break;
        }
        // 分钟秒钟优化
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        top_time.innerHTML = years + "年" + months + "月" + days + "日" + "星期" + weeks + "&nbsp" + hours + ":" + minutes + ":" + seconds
    };
    times();
    t = setInterval(times, 1000);


    // window.onload=function(){
    //     var dp = document.getElementsByClassName("BMap_Marker");
    //     for(let i =0;i<dp.length;i++){
    //         dp[i].onclick=function(){
    //             this.index=i;
    //             var as = dp[this.index].getElementsByClassName("as");
    //             for(var j=0;j<as.length;j++){
    //                 as[j].innerHTML="???";
    //             }
    //         }
    //     }

    // }


    /**
     * 表格
     */
    var option1 = {
        title: {
            text: '景点游客出行分析',
            left: '30%',
            top: '3%'


        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['自驾分析', '拼车分析', '穷游分析', '徒步分析', '飞机分析']
        },
        series: [{
            name: '出行人次',
            type: 'bar',
            data: [100, 60, 70, 999, 165]
        }]
    };
    var option2 = {
        title: {
            text: '游客主要出行方式',

            x: 'center',
            top: '10%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['飞机', '汽车', '火车']
        },
        series: [{
            name: '游客出行方式及人数',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [{
                value: 335,
                name: '飞机'
            },
                {
                    value: 310,
                    name: '汽车'
                },
                {
                    value: 234,
                    name: '火车'
                }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    inof = {
        title: {
            text: '各大景点消费情况'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['最低消费', '最高消费'],
            top: '10%'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['杭州西湖', '西溪国家湿地公园', '宝石山', '三台云水', '雷峰塔']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '最低消费',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290]
        }, {
            name: '最高消费',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90]
        }

        ]
    };
    var option3 = inof;
    var option4 = {
        title: {
            text: '游客不同年龄段',

            x: 'center',
            top: '10%'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['15岁以下', '15岁-25岁', '25岁-40岁', '40岁-55岁', '55岁以上']
        },
        series: [{
            name: '年龄段人数及比例',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            center: ['50%', '60%'],
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 335,
                name: '15岁以下'
            },
                {
                    value: 310,
                    name: '15岁-25岁'
                },
                {
                    value: 234,
                    name: '25岁-40岁'
                },
                {
                    value: 135,
                    name: '40岁-55岁'
                },
                {
                    value: 1548,
                    name: '55岁以上'
                }
            ]
        }]
    };
    var option5 = {
        legend: {},
        tooltip: {},
        dataset: {
            source: [
                ['出行方式', '跟团', '个人', '自驾'],
                ['15岁以下', 43.3, 85.8, 93.7],
                ['15岁-25岁', 83.1, 73.4, 55.1],
                ['25岁-40岁', 86.4, 65.2, 82.5],
                ['40岁-55岁', 72.4, 53.9, 39.1],
                ['55岁以上', 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [{
            type: 'bar'
        },
            {
                type: 'bar'
            },
            {
                type: 'bar'
            }
        ]
    };

    var rz1 = echarts.init(document.getElementById("rz1"));

    var c = {
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['岳麓山', '橘子洲', '梅溪湖', '生态动物园', '洋湖湿地公园']
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['景区信息', '三星以上酒店', '好评数', '平均消费', '入住数'],
                ['岳麓山', 41.1, 30.4, 65.1, 53.3],
                ['橘子洲', 86.5, 92.1, 85.7, 83.1],
                ['梅溪湖', 24.1, 67.2, 79.5, 86.4],
                ['生态动物园', 60.1, 60, 60.5, 20.4],
                ['洋湖湿地公园', 55.2, 67.1, 69.2, 72.4]
            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            gridIndex: 0
        },
        grid: {
            top: '55%'
        },
        series: [{
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row'
        },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@三星以上酒店} ({d}%)'
                },
                encode: {
                    itemName: '景区信息',
                    value: '三星以上酒店',
                    tooltip: '三星以上酒店'
                }
            }
        ]
    };
    var h = {
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['杭州西湖', '西溪国家湿地公园', '宝石山', '三台云水', '雷峰塔']
        },
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['景区信息', '三星以上酒店', '好评数', '平均消费', '入住数'],
                ['杭州西湖', 41.1, 30.4, 65.1, 53.3],
                ['西溪国家湿地公园', 86.5, 92.1, 85.7, 83.1],
                ['宝石山', 24.1, 67.2, 79.5, 86.4],
                ['三台云水', 60.1, 60, 60.5, 20.4],
                ['雷峰塔', 55.2, 67.1, 69.2, 72.4]
            ]
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            gridIndex: 0
        },
        grid: {
            top: '55%'
        },
        series: [{
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row'
        },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'line',
                smooth: true,
                seriesLayoutBy: 'row'
            },
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@三星以上酒店} ({d}%)'
                },
                encode: {
                    itemName: '景区信息',
                    value: '三星以上酒店',
                    tooltip: '三星以上酒店'
                }
            }
        ]
    };
    option6 = h;
    // if()
    //渠道分析方式随机赋值
    (function () {
        for (var i = 1; i < option6.dataset.source.length; i++) {

            //console.log(option5.dataset.source[i]);
            for (var j = 1; j < option6.dataset.source[i].length; j++) {
                //console.log(option5.dataset.source[i][j]);
                option6.dataset.source[i][j] = parseInt(Math.random() * 1000 + 500)
            }
        }
    })();
    //饼形图变化
    rz1.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            rz1.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    rz1.setOption(option6);
    var option7 = {
        title: {
            text: '游客目的分析'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['热门目的地']
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [{
            type: 'category',
            data: ['岳麓山', '橘子洲', '梅溪湖', '洋湖湿地公园', '生态动物园']
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: '预计人数',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6],
            markPoint: {
                data: [
                    {type: 'max', name: '最大人数'},
                    {type: 'min', name: '最小人数'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均人数'}
                ]
            }
        }]
    };


    //循环生成随机数组
    var arr1 = [];
    var arr2 = [];
    (function () {
        for (var i = 0; i < 5; i++) {
            arr1.push(parseInt(Math.random() * 100000 + 1000));
        }
    })();

    //数组排序方法
    function compare(value1, value2) {
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }

    arr1.sort(compare);

    //出行随机打乱
    function randomSort(value1, value2) {
        return Math.random() > 0.5 ? -1 : 1;
    }

    option1.yAxis.data.sort(randomSort);
    option1.series[0].data = arr1;
    //客源分析随机赋值
    (function () {
        for (var i = 0; i < option2.series[0].data.length; i++) {

            option2.series[0].data[i].value = parseInt(Math.random() * 100000 + 1000)
        }
    })();

    //消费分析随机赋值
    //最高值
    var arr3 = [];
    var arr4 = [];
    (function () {
        for (var i = 0; i < option3.series[0].data.length; i++) {

            arr3.push(parseInt(Math.random() * 500 + 600));
            arr4.push(parseInt(Math.random() * 300 + 400));
        }
    })();

    option3.series[0].data = arr4;
    option3.series[1].data = arr3;
    //年龄分析随机赋值
    (function () {
        for (var i = 0; i < option4.series[0].data.length; i++) {

            option4.series[0].data[i].value = parseInt(Math.random() * 100000 + 1000);
        }
    })();
    //渠道分析方式随机赋值
    (function () {
        for (var i = 1; i < option5.dataset.source.length; i++) {

            //console.log(option5.dataset.source[i]);
            for (var j = 1; j < option5.dataset.source[i].length; j++) {
                //console.log(option5.dataset.source[i][j]);
                option5.dataset.source[i][j] = parseInt(Math.random() * 1000 + 500);
            }
        }
    })();
    //游客目的地随机赋值
    var jdpm = [];
    (function () {
        for (var i = 0; i < option7.series[0].data.length; i++) {
            jdpm.push(parseInt(Math.random() * 100000 + 1000));
        }
        option7.series[0].data = jdpm;
    })();

    var atc1 = echarts.init(document.getElementById("atc1"));
    atc1.setOption(option1);
    var ky1 = echarts.init(document.getElementById("ky1"));
    ky1.setOption(option2);
    var xf1 = echarts.init(document.getElementById("xf1"));
    xf1.setOption(option3);
    var nl1 = echarts.init(document.getElementById("nl1"));
    nl1.setOption(option4);
    xf1.setOption(option3);
    var qd1 = echarts.init(document.getElementById("qd1"));
    qd1.setOption(option5);
    var ykmd = echarts.init(document.getElementById("ykmd"));
    ykmd.setOption(option7);
    // var rz1 = echarts.init(document.getElementById("rz1"));
    // rz1.setOption(option);
    //空气污染指数随机传值
    var wrzs = document.getElementsByClassName("wrzs");
    var wd1 = document.getElementById("wd1");
    (function () {
        for (var i = 0; i < wrzs.length; i++) {
            wrzs[i].innerHTML = parseInt(Math.random() * 89 + 10);
            if (wrzs[i].innerHTML > 50) {
                wrzs[i].className += " no";
            } else {
                wrzs[i].className += " yes";
            }
        }
        wd1.innerHTML = parseInt(Math.random() * 35);
        if (wd1.innerHTML > 20) {
            wd1.className += " no";
        } else {
            wd1.className += " yes";
        }
    })();
    //天气随机
    var tq = ["images/ty.jpg", "images/xy.jpg", "images/yt.jpg"];
    var tq1 = ["太阳", "下雨", "阴天"];
    var cxjy = ["天气晴朗，注意防晒", "下雨哟，出门请带好雨伞", "温度适宜，适合出游"];
    var a1 = parseInt(Math.random() * 3 + 0)
    document.getElementById("tqsk2").src = tq[a1];
    document.getElementById("tqsk3").innerHTML = tq1[a1];
    document.getElementById("cxjy1").innerHTML = cxjy[a1];


    /*
    地图发生改变
    */

    function rush(i) {
        //循环生成随机数组
        var arr1 = [];
        var arr2 = [];
        (function () {
            for (var i = 0; i < 5; i++) {
                arr1.push(parseInt(Math.random() * 100000 + 1000));
            }
        })();

        //数组排序方法
        function compare(value1, value2) {
            if (value1 < value2) {
                return -1;
            } else if (value1 > value2) {
                return 1;
            } else {
                return 0;
            }
        }

        arr1.sort(compare);

        //出行随机打乱
        function randomSort(value1, value2) {
            return Math.random() > 0.5 ? -1 : 1;
        }

        option1.yAxis.data.sort(randomSort);
        option1.series[0].data = arr1;
        //客源分析随机赋值
        (function () {
            for (var i = 0; i < option2.series[0].data.length; i++) {

                option2.series[0].data[i].value = parseInt(Math.random() * 100000 + 1000)
            }
        })();

        //消费分析随机赋值
        //最高值
        var arr3 = [];
        var arr4 = [];
        (function () {
            for (var i = 0; i < option3.series[0].data.length; i++) {

                arr3.push(parseInt(Math.random() * 500 + 600));
                arr4.push(parseInt(Math.random() * 300 + 400));
            }
        })();
        //改变旅游景点
        option3.xAxis[0].data = ['杭州西湖', '西溪国家湿地公园', '宝石山', '三台云水', '雷峰塔'];
        option3.series[0].data = arr4;
        option3.series[1].data = arr3;
        //年龄分析随机赋值
        (function () {
            for (var i = 0; i < option4.series[0].data.length; i++) {

                option4.series[0].data[i].value = parseInt(Math.random() * 100000 + 1000);
            }
        })();
        //渠道分析方式随机赋值
        (function () {
            for (var i = 1; i < option5.dataset.source.length; i++) {

                //console.log(option5.dataset.source[i]);
                for (var j = 1; j < option5.dataset.source[i].length; j++) {
                    //console.log(option5.dataset.source[i][j]);
                    option5.dataset.source[i][j] = parseInt(Math.random() * 1000 + 500);
                }
            }
        })();
        //游客目的地随机赋值
        var jdpm = [];
        (function () {
            for (var i = 0; i < option7.series[0].data.length; i++) {
                jdpm.push(parseInt(Math.random() * 100000 + 1000));
            }
            option7.series[0].data = jdpm;
        })();
        //景点变化
        option7.xAxis[0].data = ['杭州西湖', '西溪国家湿地公园', '宝石山', '三台云水', '雷峰塔'];
        var atc1 = echarts.init(document.getElementById("atc1"));
        atc1.setOption(option1);
        var ky1 = echarts.init(document.getElementById("ky1"));
        ky1.setOption(option2);
        var xf1 = echarts.init(document.getElementById("xf1"));
        xf1.setOption(option3);
        var nl1 = echarts.init(document.getElementById("nl1"));
        nl1.setOption(option4);

        var qd1 = echarts.init(document.getElementById("qd1"));
        qd1.setOption(option5);
        var ykmd = echarts.init(document.getElementById("ykmd"));
        ykmd.setOption(option7);
        // var rz1 = echarts.init(document.getElementById("rz1"));
        // rz1.setOption(option);
        //空气污染指数随机传值
        var wrzs = document.getElementsByClassName("wrzs");
        (function () {
            for (var i = 0; i < wrzs.length; i++) {
                count = parseInt(Math.random() * 90 + 10)
                wrzs[i].innerHTML = count;
                if (wrzs[i].innerHTML > 50) {
                    wrzs[i].className += " no";
                } else {
                    wrzs[i].className += " yes";
                }
            }
        })();
        //天气随机
        var tq = ["images/ty.jpg", "images/xy.jpg", "images/yt.jpg"];
        var tq1 = ["太阳", "下雨", "阴天"];
        var cxjy = ["天气晴朗，注意防晒", "下雨哟，出门请带好雨伞", "温度适宜，适合出游"];
        var a1 = parseInt(Math.random() * 3 + 0)
        document.getElementById("tqsk2").src = tq[a1];
        document.getElementById("tqsk3").innerHTML = tq1[a1];
        document.getElementById("cxjy1").innerHTML = cxjy[a1];

        var dd = document.getElementsByClassName('dd');
        for (var j = 0; j < dd.length; j++) {
            markerArr[i].content.splice(j, 1, dd[j].innerHTML);
        }
        if (city == "杭州市") {
            option6 = h;
            inof.xAxis[0].data = ['杭州西湖', '西溪国家湿地公园', '宝石山', '三台云水', '雷峰塔'];
            option3 = inof;
            xf1.setOption(option3);
        } else if (city == "长沙市") {
            option6 = c;
            inof.xAxis[0].data = ['岳麓山', '橘子洲', '梅溪湖', '洋湖湿地公园', '生态动物园']
            option3 = inof;
            xf1.setOption(option3);
        }
        //渠道分析方式随机赋值
        (function () {
            for (var i = 1; i < option6.dataset.source.length; i++) {

                //console.log(option5.dataset.source[i]);
                for (var j = 1; j < option6.dataset.source[i].length; j++) {
                    //console.log(option5.dataset.source[i][j]);
                    option6.dataset.source[i][j] = parseInt(Math.random() * 1000 + 500)
                }
            }
        })();
        //饼形图变化
        rz1.on('updateAxisPointer', function (event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                rz1.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });

        rz1.setOption(option6);
    }
}
