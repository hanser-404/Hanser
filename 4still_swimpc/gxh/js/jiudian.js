window.onload=function(){
    var ass=[
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"6分",
            jiage:"133元/天",
        },
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"6分",
            jiage:"133元/天",
        },
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"6分",
            jiage:"133元/天",
        },
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"6分",
            jiage:"133元/天",
        },
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"6分",
            jiage:"133元/天",
        },
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"6分",
            jiage:"133元/天",
        },
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"6分",
            jiage:"133元/天",
        },
        {
            img:"img/酒店住宿/618.png",
            name:"东京酒店",
            pf:"5分",
            jiage:"133元/天",
        }
    ]
    for(var i=0;i<ass.length;i++){
        document.getElementById("jiudiana").innerHTML+=
        "<div class='gxh3-2-2-1'><div class='gxh3-2-2-1-1'>"+
        "<img src="+ass[i].img+
        "></div><p class="+ass[i].name+
        ">东京酒店</p><p class="+ass[i].pf+
        ">6分</p><p class="+ass[i].jiage+
        ">133元/天</p></div>"
    }
    var add=[
        {
            img:"img/酒店住宿/1730.png",
        },
        {
            img:"img/酒店住宿/1730.png",
        },
        {
            img:"img/酒店住宿/1730.png",
        },
        {
            img:"img/酒店住宿/1730.png",
        },
        {
            img:"img/酒店住宿/1730.png",
        },
        {
            img:"img/酒店住宿/1730.png",
        },
    ]
    for(var j=0;j<add.length;j++){
        document.getElementById("jiudian2").innerHTML+=
        "<div><img src="+add[j].img+
        "></div>"
    }
    var aff=[
        {
            img:"img/酒店住宿/6272.png",
            name:"三井花园饭店京都新町别邸",
            jiage:"1296元/天"
        },
        {
            img:"img/酒店住宿/6272.png",
            name:"三井花园饭店京都新町别邸",
            jiage:"1296元/天"
        }
    ]
    for(var k=0;k<aff.length;k++){
        document.getElementById("jiudian3").innerHTML+=
        "<div class='gxh3-2-4-1'><div><img src="+aff[k].img+
        "></div><p>"+aff[k].name+
        "</p><p>"+aff[k].jiage+
        "</p></div>"
    }
}