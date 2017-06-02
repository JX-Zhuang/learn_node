/**
 * Created by Jesse on 17/4/22.
 */
(function () {
    function getXhr() {
        var ary = [function () {
            return new XMLHttpRequest;
        }, function () {
            return new ActiveXObject('Microsoft.XMLHTTP');
        }, function () {
            return new ActiveXObject('Msxml2.XMLHTTP');
        }, function () {
            return new ActiveXObject('Msxml3.XMLHTTP');
        }], xhr;
        for (var i = 0; i < ary.length; i++) {
            var curFun = ary[i];
            try {
                xhr = curFun();
                getXhr = curFun; //函数覆盖  惰性载入函数，第一次执行哦安段，以后不再执行
                break;
            } catch (e) {

            }
        }
        if (xhr === '') {
            throw Error('浏览器不支持ajax');
        }
        return xhr;
    }

    function ajax(options) {
        var _defaultOptions = {
            url: '',
            type: 'get',
            dataType: 'text',
            data: null,
            success: null,
            async: true,
            cache: true
        };
        for (var k in options) {
            if (options.hasOwnProperty(k)) {
                _defaultOptions[k] = options[k];
            }
        }
        var xhr = getXhr(); //UNSET 0,OPEND 1,RE
        if (_defaultOptions.type.toUpperCase() == 'GET' && !_defaultOptions.cache) {
            if (_defaultOptions.url.indexOf('?') > -1) {
                _defaultOptions.url += '&_ran' + Math.random();
            } else {
                _defaultOptions.url += '?_ran' + Math.random();
            }
        }
        xhr.open(_defaultOptions.type, _defaultOptions.url, _defaultOptions.async);
        xhr.responseType = _defaultOptions.dataType;
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && /2\d{2}/.test(this.status)) {
                if (typeof _defaultOptions.success === 'function') {
                    _defaultOptions.success.call(this, this.response);
                }
            }
        };
        xhr.send(_defaultOptions.data);
    }

    window.ajax = ajax;
})();
/**
 * var xhr = new XMLHttpRequest;
 * xhr.open('method',url,async);
 * xhr.onreadystatechange = function(){
 *  if(xhr.readyState == 4&&xhr.status == 200){
 *      xhr.response;
 *  }
 * }
 * xhr.send(data); //send方法中传递的如果是对象，自动toString();
 */
// ajax({
//     type: 'get',//GET PUT DELETE POST
//     url: '/user',
//     async: true,
//     cache: false,
//     data: '',
//     success: function (data) {
//
//     },
// });














