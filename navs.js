/* 多彩菜单*/
// 点击 展开  按钮变化
// 点击收起来

~function (){
    $('em').html('+');
    $('.navs p').click(function () {
        //$(this).next().toggle();
        var dis= $(this).next('ul').css('display');
        if(dis=='none'){
            // 进行展开 系列操作
            //$(this).find('em').html('-');
            //$(this).next('ul').show(); // 切换状态
            $(this).find('em').html('-').parent().next('ul').show();
        }else{
            // 进行关闭 系列操作
            //$(this).parent().find('em').html('+'); // 该层级一下 em 全部 +
            //$(this).parent().find('ul').hide(); // 该层级一下 ul 全部闭合
            $(this).parent().find('em').html('+').parent().parent().find('ul').hide();
        }
    });

}();