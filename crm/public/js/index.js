/**
 * Created by Jesse on 17/4/22.
 */
//获取所有数据，得到数据后插入到表格中
var module = (function () {
    function init() {
        //获取所有数据
        ajax({
            url:'/getList',
            dataType:'json',
            success:function (data) {
                
            }
        })
    }
    return {
        init:init
    };
})();
module.init();
