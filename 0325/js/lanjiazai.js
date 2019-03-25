// 图片地址
function imgonload() {
    let a = document.querySelectorAll("img");
    // console.log(a);
    for(let i = 0;i < a.length; i++){
        // 获取图片在页面的位置
        if(a[i].getBoundingClientRect().top < window.innerHeight){
            // console.log(a[i]);
            a[i].src = a[i].dataset.src;
        }

    }
}
// 价格防抖  完成
function csollimg(fn) {
    let timer = null;
    let context = this;
    return function () {
        clearTimeout(timer)
       timer = setTimeout(() =>{
            fn.apply(context);
        }, 500);
    }
}