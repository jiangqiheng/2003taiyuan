$(function(){
    console.log($.cookie('users'))
    var $shou = $('#shou');
    $shou.click(function(){
        location.href = '../index.html'
    })
    
    $('#d1').click(function(){
        var uname = $('#in1').val();
        var upwd = $('#in2').val();
        var cookie_str = $.cookie('users') ? $.cookie('users') : '';
        var cookie_obj = tooj(cookie_str);
        console.log(cookie_obj);
        if(uname in cookie_obj){
            if(upwd === cookie_obj[uname]){
                alert('登陆成功');
                location.href = '../pages/shangpin.html'
            }
            else{
                alert('密码错误')
            }
        }
        else{
            alert('该用户不存在')
        }
    })

    $('#ce').click(function(){
        location.href = '../pages/zhuce.html'
    })
})