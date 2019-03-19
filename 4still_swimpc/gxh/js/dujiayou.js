window.onload=function(){
    var ass=[
        {
            img:"img/独家日游/0.jpg",
            place:"日本",
            title:"【City Walk】日本桥— 穿街走巷看东京，感受大城市的市井人情",
            nr:"作为世界大都市，东京城市空间犹如迷宫，旅行者非常容易迷失其中。不妨跟随Citywalk来到日本桥，从东京建起的初始点开始了解这座城市通过半天的游览帮助大家克服初到东京的焦虑和语言文化带来的隔阂",
            jiage:"138元"
        },{
            img:"img/独家日游/0.jpg",
            place:"日本",
            title:"【City Walk】日本桥— 穿街走巷看东京，感受大城市的市井人情",
            nr:"作为世界大都市，东京城市空间犹如迷宫，旅行者非常容易迷失其中。不妨跟随Citywalk来到日本桥，从东京建起的初始点开始了解这座城市通过半天的游览帮助大家克服初到东京的焦虑和语言文化带来的隔阂",
            jiage:"138元"
        },
        {
            img:"img/独家日游/0.jpg",
            place:"日本",
            title:"【City Walk】日本桥— 穿街走巷看东京，感受大城市的市井人情",
            nr:"作为世界大都市，东京城市空间犹如迷宫，旅行者非常容易迷失其中。不妨跟随Citywalk来到日本桥，从东京建起的初始点开始了解这座城市通过半天的游览帮助大家克服初到东京的焦虑和语言文化带来的隔阂",
            jiage:"138元"
        },{
            img:"img/独家日游/0.jpg",
            place:"日本",
            title:"【City Walk】日本桥— 穿街走巷看东京，感受大城市的市井人情",
            nr:"作为世界大都市，东京城市空间犹如迷宫，旅行者非常容易迷失其中。不妨跟随Citywalk来到日本桥，从东京建起的初始点开始了解这座城市通过半天的游览帮助大家克服初到东京的焦虑和语言文化带来的隔阂",
            jiage:"138元"
        }
    ]
    for(var i=0;i<ass.length;i++){
        document.getElementById("gxh-nav-2").innerHTML+=
        // console.log(ass[i].img)
        "<div class='gxh-nav-2-1'><img src="+ass[i].img+
        "></div><div class='gxh-nav-2-2'><div class='left-1'>"+ass[i].place+
        "</div><div class='left-2'>"+ass[i].title+
        "</div><div class='left-3'>"+ass[i].nr+
        "</div><div class='left-4'>"+ass[i].jiage+
        "</div><button>立即预定</button></div>"
        // "<div class='box'><div class='box-img'><img src="+
        // zc[i].img+"></div><div class='box-nr'><h1>"+zc[i].name+"</h1><p class='jieshao'>"+zc[i].jianjie+
        //     "</p><p class='jiage'>"+zc[i].jiage+"</p><div class='goumai'>租 借</div></div></div>  "
    }
}