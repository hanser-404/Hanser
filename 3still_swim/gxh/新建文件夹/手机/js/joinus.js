window.onload = function() {
    var information = 
    ["我和你一样爱旅行", "而美好的旅程不应独享，为了记录一次年会出行，我们上天下地入海记录了普吉岛的点点滴滴。因为我们的工作就是帮助中国旅行者，以自己的视角体验世界。",
    "所有在路上与即将在路上的尚游er们", "让我们一起，继续对世界上瘾。"
    ]
    
    var ps = document.getElementsByTagName('p')
    for (var i = 0; i < ps.length; i++) {
        ps[i].innerHTML = information[i];
    }

}