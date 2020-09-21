$(function(){
    var $shou = $('#shou');
    $shou.click(function(){
        location.href = '../index.html'
    })
    var $d1 = $('form .d1');
    var ji = $('form #ji');
    var mi = $('form #mi');
    var que = $('form #que');
    var agan = $('#agan').val();
    var phone_reg=/^1\d{10}$/; 
    var password = /^[a-zA-Z]\w{5,17}$/

    $('#uname').on('blur',function(){
        var uname = $('#uname').val();
    if(!phone_reg.test(uname)){
        ji.text('请输入正确的手机号');
        ji.css('color','red');
        return;
    }
    else{
        ji.text('正确');
        ji.css('color','skyblue');
    }
    })

    $('#upwd').on('blur',function(){
        var upwd = $('#upwd').val();
        if(!password.test(upwd)){
            mi.text('请规范输入密码');
            mi.css('color','red');
            return;
        }
        else{
            mi.text('正确');
            mi.css('color','skyblue');
        }
    })
    $('#agan').on('blur',function(){
        if(($('#agan').val()) !== ($('#upwd').val())){
            que.text('两次密码不一致');
            que.css('color','red');
            return;
        }
        else{
            que.text('正确');
            que.css('color','skyblue');
        }
    })

    
    $d1.click(function(){
        var uname = $('#uname').val();
        var upwd = $('#upwd').val();
    //获取cookie
    var cookie_str = $.cookie('users') ? $.cookie('users') : '';
    //转对象
    var cookie_obj =tooj(cookie_str);
    //判断用户是否已经存在
    if(uname in cookie_obj){
        alert('该用户已存在');
        return;
    }
    //不存在，加入对象
    cookie_obj[uname] = upwd;
    //存入cookie
    $.cookie('users',JSON.stringify(cookie_obj),{expires : 20,path : '/'});
    alert('注册成功');
    })
    $('#lu').click(function(){
        location.href = '../pages/denglu.html'
    })
})