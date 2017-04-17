$(function(){
    var val;
    //模糊输入
    $(".inp-name").click(function () {  
        $(".inp-items").css('display', 'block');  
        return false;  
    });  

    $("body").click(function () {  
        $(".inp-items").css('display', 'none');  
    });
     
    $(".inp-item").hover(function () {  
        $(this).css('background-color', '#1C86EE').css('color', 'white');  
    }, function () {  
        $(this).css('background-color', 'white').css('color', 'black');  
    }); 
      
    $(".inp-name").keyup(function () {  
        $(".inp-items").css('display', 'block'); 

        if ($(".inp-name").val().length <= 0) {  
            $(".inp-item").css('display', 'block'); 
            return false;  
        }  

        $(".inp-item").css('display', 'none');

        for (var i = 0; i < $(".inp-item").length; i++) {   
            if ($(".inp-item").eq(i).text().substr(0, $(".inp-name").val().length) == $(".inp-name").val()) {  
                $(".inp-item").eq(i).css('display', 'block');  
            }
        }  
    })
    
    /*//项点击  
    $(".inp-item").click(function () {  
        $(".inp-name").val($(this).text());  
    })*/
    
    //name
    $(".inp-name").blur(function(){
        val = $(".inp-name").val();
        if(val == ''){
			$('.sta:eq(0)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(0)').removeClass('h').html('&#xe707;');
        }
    })
    $(".inp-name").on('input change', function(){
        var val = $(".inp-name").val();
        if(val == ''){
			$('.sta:eq(0)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(0)').removeClass('h').html('&#xe707;');
        }
        $('.information').append(val + '&nbsp;');
    })
    
    //block
    var text_01, text_02;
    $('#block-01, #block-02').change(function(){
        text_01 = $('#block-01').find('option:selected').text();
        text_02 = $('#block-02').find('option:selected').text();
        if(text_01 == '' || text_02 == '' || text_01 == '区属' || text_02 == '板块'){
			$('.sta:eq(1)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(1)').removeClass('h').html('&#xe707;');
        }
    })
    $('#block-01').on('change', function(){
        text_01 = $('#block-01').find('option:selected').text();
        $('.information').append(text_01 + '&nbsp;');
    })
    $('#block-02').on('change', function(){
        text_02 = $('#block-02').find('option:selected').text();
        $('.information').append(text_02 + '&nbsp;');
    })
    
    //type of house
    var znum = /^[0-9]$/;
    $('.housetype input').blur(function(){
        val = $(this).val();
        if(!znum.test(val) || $('.housetype input:eq(0)').val() <= 0){
            $('.warm:eq(0)').html('输入错误!');
        }else {
            $('.warm:eq(0)').html('');
        }
    })
    
    $('.housetype input').on('input change', function(){
        val = $(this).val();
        if(!znum.test(val) || $('.housetype input:eq(0)').val() <= 0){
            $('.warm:eq(0)').html('输入错误!');
        }else {
            $('.warm:eq(0)').html('');
        } 
        $('.information').append(val + '&nbsp;');
    })
    
    //type of rent
    $('#bedroom, #limit, .radio input').change(function(){
        text_01 = $('#bedroom').find('option:selected').text();
        text_02 = $('#limit').find('option:selected').text();
        if(text_01 == '' || text_02 == '' || text_01 == '选择卧室内容' || text_02 == '选择限制条件' || !$('.radio input:eq(0)').attr('checked') && !$('.radio input:eq(1)').attr('checked')){
			$('.warm:eq(1)').html('请选择全部条件!');
		}else{
            $('.warm:eq(1)').html('');
        }
    })
    
    //area and rent
    var zAreaAndRent = /^[1-9]+$/;
    $('.area').on('input change', function(){
        val = $(this).val();
        if(!zAreaAndRent.test(val)){
            $('.warm:eq(2)').html('格式错误!');
        }else {
            $('.warm:eq(2)').html('');
        }
    })
    $('.rent').on('input change', function(){
        val = $(this).val();
        if(!zAreaAndRent.test(val)){
            $('.warm:eq(3)').html('格式错误!');
        }else {
            $('.warm:eq(3)').html('');
        }
    })
    
    //checked all
    $('.choose, .chooseAll').attr('checked');
    $('.choose').on('click', function(){
        $('.chooseAll').attr('checked', false);
    })
    $('.chooseAll').on('click', function(){
        $('.choose').attr('checked', false);
    })
    
    //conform moblie number
    var z = /^1[34578]\d{9}$/;
	var num;
    $('.enter input').blur(function(){
        num = $(this).val();
		if(z.test(num)){
			$('.hint').addClass('h').html('&#xe707;');
		}else {
            $('.hint').removeClass('h').html('&#xe62a;');
        }
    })

	$('.enter input').on('input change', function(){
        num = $(this).val();
		if(z.test(num)){
			$('.hint').addClass('h').html('&#xe707;');
		}else {
            $('.hint').removeClass('h').html('&#xe62a;');
        }
    })
})



