window.onload = function () {
    var a = {
        "img": ["img/助手/325x240 (1).jpg", "img/助手/325x240 (2).jpg", "img/助手/325x240.jpg", "img/助手/325x240 (1).jpg", "img/助手/325x240 (2).jpg", "img/助手/325x240.jpg",
            "img/助手/325x240 (1).jpg", "img/助手/325x240 (2).jpg", "img/助手/325x240.jpg", "img/助手/325x240 (1).jpg", "img/助手/325x240 (2).jpg", "img/助手/325x240.jpg"
        ],
        "font": ["上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海",
            "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海",
            "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海",
            "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海", "上海·大阪·奈良·富士山·富士河口·湖·东京·北海道·海口·上海",
        ]
    };
    var b = document.getElementById("haha");
    var c = document.getElementsByClassName("cao");
    console.log(c.length);
    var d=  document.getElementsByClassName("aaa");
    console.log(d.length);

    for(var i = 0;i<d.length;i++){
        d[i].src = a.img[i];
        c[i].innerHTML = a.font[i];
    }
    
    
    
    
}