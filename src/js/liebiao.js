

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
    
})


let str = decodeURIComponent(window.location.search);//  ?jump=count
let s_str = str.substr(1);//  jump=count
const arr = s_str.split('=')[1]; // count

$.get('../mock/' + arr + '.json' , function(res){
    console.log(res);
        var string = '';
        res.forEach(function(item){
            var img = item.img.split(',')[0];
            string +=
            `
            <li>
            <a href="../pages/shangpin.html?jump=count&${item.id}" id = "${item.id}">
                <img src="../img/liebiao/${img}.jpg" alt="">
                <span>${item.goodName}</span><br>
                <span>${item.good-name}
                </span><br>
                <h5>￥${item.price}</h5>
            </a>
            </li>
                
            `
        })
      $("#good-list").html(string);
})






			
