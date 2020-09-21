$(function(){
    var $deng = $('#deng');
    $deng.click(function () {
        location.href = '../pages/denglu.html';
    })
    var $zhu = $('#zhu');
    $zhu.click(function(){
        location.href = '../pages/zhuce.html'
    })
    var $bao = $('#bao');
    $bao.click(function(){
        location.href = location.href = './liebiao.html?jump=count'
    })
    $('#tiao-ye').click(function(){
        location.href = '../index.html'
    })
    var xiao01 = $('#xiao01')
    var xiao02 = $('#xiao02')
    var img1 = $('#img1')
    var img2 = $('#img2')
    xiao01.mouseenter(function(){
        xiao01.css('border','1px red solid')
        img1.css('z-index','1000');
        img2.css('z-index','1');
    })
    xiao02.mouseenter(function(){
        xiao02.css('border','1px red solid')   
        img2.css('z-index','1000');
        img1.css('z-index','1');
    })
    xiao01.mouseleave(function(){
        xiao01.css('border','none')
    })
    xiao02.mouseleave(function(){
        xiao02.css('border','none')
    })
     $('$er-d2').click(function(){
         location.href = './car.html';
     })
     
})

$.get('../mock/' + arr + '.json' , function(res){
    console.log(res);
        var string = '';
        res.forEach(function(item){
            if(item.id == id){
                var img = item.img.split(',');
            string +=
             `
              <div class="fangtu">
                <img id="xiao01" src="../img/shangpin/xiao01.jpg" alt="">
                <img id="xiao02" src="../img/shangpin/xiao03.jpg" alt="">  
                 <div class="xian"></div>  
                 <img id="img1" src="../img/shangpin/da01.jpg" alt="">    
                 <img id="img2" src="../img/shangpin/da03.jpg" alt="">    
            </div> 
            <div class="wenben">
                <h5>BVLGARI/宝格丽 经典款式女士小牛皮小号单肩包【99新未使用】</h5><hr><br>
                <span class="sp1">寺库价</span>¥
                <span id="price"> 17,400</span><br><br>
                <span class="sp1">有货</span>
                <span>预计下单后会在5-7天内发货 </span><br><br>
                <span class="sp1">商品信息</span><span>非自营</span><br><br><hr><br><br>
                <span class="sp1">颜色</span><span>宝石绿</span><br><br>
                <span class="sp1">尺寸</span><span>均码</span><br><br>
                <span class="sp1">购买数量 </span>
                <input id="jian" type="button" value="-">
                  <input id="txt" type="text">
                  <input id="jia" type="button" value="+"><br><br>
                  <div id="er">
                    <div id="er-d1">
                        <h4>微信扫码下单更优惠</h4><br>
                        <img src="../img/shangpin/weixin.gif" alt="">
                    </div>
                    <div id="er-d2">立即抢购</div>
                    <div id="er-d3">加入购物车</div>
                  </div>
                 

            </div>   
                
            `
            }
            
           
        })
      $(".bei").html(string);
})
