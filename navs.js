/* ��ʲ˵�*/
// ��� չ��  ��ť�仯
// ���������

~function (){
    $('em').html('+');
    $('.navs p').click(function () {
        //$(this).next().toggle();
        var dis= $(this).next('ul').css('display');
        if(dis=='none'){
            // ����չ�� ϵ�в���
            //$(this).find('em').html('-');
            //$(this).next('ul').show(); // �л�״̬
            $(this).find('em').html('-').parent().next('ul').show();
        }else{
            // ���йر� ϵ�в���
            //$(this).parent().find('em').html('+'); // �ò㼶һ�� em ȫ�� +
            //$(this).parent().find('ul').hide(); // �ò㼶һ�� ul ȫ���պ�
            $(this).parent().find('em').html('+').parent().parent().find('ul').hide();
        }
    });

}();