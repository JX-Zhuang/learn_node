/**
 * Created by Jesse on 17/5/6.
 */
window.onload = function () {
    document.getElementById('regBtn').addEventListener('click', function () {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/reg', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && /^2\d{2}/.test(xhr.status)) {
                console.log(xhr.response);
                var img = document.createElement('img');
                img.src = xhr.response;
                document.body.appendChild(img);
            }
        };
        //准备发送给服务器的数据
        var formData = new FormData();
        //给这个表单对象增加一个表单数据
        formData.append('username',document.querySelector('input[name=username]').value);
        formData.append('password',document.querySelector('input[name=password]').value);
        //给这个表单对象增加一个文件元素
        formData.append('avatar',document.querySelector('input[name=avatar]').files[0]);
        xhr.send(formData);
    });
};