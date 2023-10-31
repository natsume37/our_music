// 固定导航栏
let head = document.querySelector('#nav')
window.onscroll = ()=>{
    let top = document.documentElement.scrollTop || document.body.scrollTop
    if(top !=0 ){
        head.style = 'position:fixed;top:0;'

    }else{
        head.style = 'position:static'
    }
}