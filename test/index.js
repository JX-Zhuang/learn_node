/**
 * Created by Jesse on 17/4/18.
 */
console.log('ok');
var list = document.getElementById('list');
for(var i = 0;i<3;i++){
    list.innerHTML += '<li>'+(i+1)+'</li>';
    // (function(j){
    //     console.log(document.getElementsByTagName('li')[j])
    //     document.getElementsByTagName('li')[j].addEventListener('click',function () {
    //         console.log(this);
    //     });
    // })(i);
}
list.addEventListener('click',function (e) {
    var target = e.target;
    if(target.tagName === 'LI'){
        console.log(target.innerText);
    }
});

list.addEventListener('click',function (e) {
    var target = e.target;
    if(target.tagName === 'LI'){
        console.log(123);
    }
});
document.getElementsByTagName('li')[0].onclick = function () {
    console.log(9);
};
document.getElementsByTagName('li')[0].onclick = function () {
    console.log(92);
};
function loadImage() {
    var img = document.getElementsByTagName('img');
    //获取下拉的距离
    var top = document.body.scrollTop||document.documentElement.scrollTop;
    //获取可视区域的高度
    var h = document.documentElement.clientHeight||document.body.clientHeight;
    for(var i=0,l=img.length;i<l;i++){
        img[i].src = img[i].getAttribute('data-src');
    }
}
window.onscroll = loadImage;
// document.onclick = function (e) {
//   console.log('clientX:',e.clientX,' clientY:'+e.clientY);
//   console.log('pageX:',e.pageX,' pageY:'+e.pageY);
//   console.log('offsetX:',e.offsetX,' offsetY:'+e.offsetY);
//   console.log('x:',e.x,' y:'+e.y);
//   console.log('screenX:',e.screenX,' screenY:'+e.screenY);
// };
/**
 * client:相对于当前窗口，不包括窗口自身的控件和滚动条
 * offset:相对于出发事件的对象
 *
 **/