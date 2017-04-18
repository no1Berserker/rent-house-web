$(function(){
    var val;
    var com = 0;
    //name
    var zzh = /^[\u4e00-\u9fa5]+$/;
    $(".inp-name").blur(function(){
        val = $(".inp-name").val();
        if(val == '' || !zzh.test(val)){
			$('.sta:eq(0)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(0)').removeClass('h').html('&#xe707;');
        }
    })
    //模糊输入
    $("body").click(function(){  
        $(".inp-items").css('display', 'none');  
    })
    
    $('.inp-name').click(function(){
        $(".inp-items").css('display', 'block');
        return false;
    })
    
    $(".inp-name").on('input change', function(){
        $(".inp-items").css('display', 'block'); 
        
        val = $(".inp-name").val();
        
        if($(".inp-name").val() == ''){  
            $(".inp-item").css('display', 'block'); 
        }

        $(".inp-item").click(function(){  
            val = $(this).text();  
        })
        
        $(".inp-item").css('display', 'none');

        for(var i = 0; i < $(".inp-item").length; i++){   
            if($(".inp-item").eq(i).text().substr(0, $(".inp-name").val().length) == $(".inp-name").val()){  
                $(".inp-item").eq(i).css('display', 'block');  
            }
        }  

        if(val == '' || !zzh.test(val)){
			$('.sta:eq(0)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(0)').removeClass('h').html('&#xe707;');
        }
    })
    
    $(".inp-item").mousedown(function(){
        $('.inp-name').val($(this).text());
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
    })
    $('#block-02').on('change', function(){
        text_02 = $('#block-02').find('option:selected').text();
    })
    
    //type of house
    var znum = /^[0-9]$/;
    $('.housetype input').blur(function(){
        val = $(this).val();
        if(!znum.test(val) || $('.housetype input:eq(0)').val() <= 0){
        	$('.sta:eq(2)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(2)').removeClass('h').html('&#xe707;');
        }
    })
    
    $('.housetype input').on('input change', function(){
        val = $(this).val();
        if(!znum.test(val) || $('.housetype input:eq(0)').val() <= 0){
        	$('.sta:eq(2)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(2)').removeClass('h').html('&#xe707;');
        }
    })
    
    //type of rent
    $('#bedroom, #limit, .radio input').change(function(){
        text_01 = $('#bedroom').find('option:selected').text();
        text_02 = $('#limit').find('option:selected').text();
        if(text_01 == '' || text_02 == '' || text_01 == '选择卧室内容' || text_02 == '选择限制条件' || !$('.radio input:eq(0)').attr('checked') && !$('.radio input:eq(1)').attr('checked')){
			$('.sta:eq(3)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(3)').removeClass('h').html('&#xe707;');
        }
    })
    
    //area and rent
    var zAreaAndRent = /^[1-9][0-9]+$/;
    $('.area').on('input change', function(){
        val = $(this).val();
        if(!zAreaAndRent.test(val)){
        	$('.sta:eq(4)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(4)').removeClass('h').html('&#xe707;');
        }
    })
    $('.rent').on('input change', function(){
        val = $(this).val();
        if(!zAreaAndRent.test(val)){
        	$('.sta:eq(5)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(5)').removeClass('h').html('&#xe707;');
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
		if(!z.test(num)){
			$('.sta:eq(6)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(6)').removeClass('h').html('&#xe707;');
        }
    })

	$('.enter input').on('input change', function(){
        num = $(this).val();
		if(!z.test(num)){
			$('.sta:eq(6)').addClass('h').html('&#xe62a;');
		}else {
            $('.sta:eq(6)').removeClass('h').html('&#xe707;');
        }
    })
    
    //upload
    $('.content-icon-img').click(function(){
        $(this).hide();
        $('.content-icon-imgI').show();
    })
    $('.content-icon-imgI').click(function(){
        $('.content-icon-imgI').hide();
        $('.content-icon-img').show();
    })
    
    $('.find').click(function(){
        if($(this).html() == '地图找房'){
            $(this).text("收起地图找房");
            $(".map").stop(true).animate({"height": 200}).slideDown(1000);	
            $('.map').show();
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(118.786357, 32.029159);
            map.centerAndZoom(point, 15);
            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);               // 将标注添加到地图中
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画

            var opts = {
              position : point,    // 指定文本标注所在的地理位置
              offset   : new BMap.Size(30, -30)    //设置文本偏移量
            }
            var label = new BMap.Label("甘池软件", opts);  // 创建文本标注对象
                label.setStyle({
                     color : "red",
                     fontSize : "12px",
                     height : "20px",
                     lineHeight : "20px",
                     fontFamily:"微软雅黑"
                 });
            map.addOverlay(label);  
        } else {
            $(this).text("地图找房");
            $(".map").slideUp(1000);			 
        }
    })
    
    var val1, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12, val13, val14, val15, val16, val17, val18, val19;
    $(window).on('input change', function(){
        get();
    
        $('.information').html('小区名称：'+val1+'<br>区属：'+val2+'<br>板块：'+val3+'<br>户型：'+val4+'室，'+val5+'厅，'+val6+'卫，'+val7+'阳台<br>出租形式：'+val8+'&nbsp;'+val9+'&nbsp;'+val10+'&nbsp;'+val11+'<br>面积：'+val12+'平方米<br>租金：'+val13+'元/每月<br>手机号码：'+val14+'<br>付款方式：'+val15+'&nbsp;'+val16+'&nbsp;'+val17+'&nbsp;'+val18+'&nbsp;'+val19);
    })
    
    //submit
    var sta;
    $('.content-submit').on('click', function(){
        val = $('.information').text();
        sta = $('.sta').hasClass('h');
        get();
        if(sta || val == ''){
            $('.sta:eq(7)').css({'margin-left': 84, 'font-size': 12, 'color': 'red'}).html('请填写完善后再提交！');
        }else if(val1 == '' || val4 == '' || val5 == '' || val6 == '' || val7 == '' || val12 == '' || val13 == '' || val14 == ''){
            $('.sta:eq(7)').css({'margin-left': 84, 'font-size': 12, 'color': 'red'}).html('请填写完善后再提交！');
        }else if(val8 == '' && val9 == ''){
            $('.sta:eq(7)').css({'margin-left': 84, 'font-size': 12, 'color': 'red'}).html('请填写完善后再提交！');
        }else if(val15 == '' && val16 == '' && val17 == '' && val18 == '' && val19 == ''){
            $('.sta:eq(7)').css({'margin-left': 84, 'font-size': 12, 'color': 'red'}).html('请填写完善后再提交！');
        }else {
            $('.sta:eq(7)').html('');
        }
    }) 
    
    function get(){
        val1 = $(".inp-name").val();
        val2 = $('#block-01').find('option:selected').text();
        val3 = $('#block-02').find('option:selected').text();
        val4 = $('.housetype input:eq(0)').val();
        val5 = $('.housetype input:eq(1)').val();
        val6 = $('.housetype input:eq(2)').val();
        val7 = $('.housetype input:eq(3)').val();
        if($('.radio.f input').attr('checked')){
            val8 = '整租';
        }else {
            val8 = '';
        }
        if($('.radio.sec input').attr('checked')){
            val9 = '合租';
        }else {
            val9 = '';
        }
        if($('.choose:eq(0)').attr('checked')){
            val15 = '月付';
        }else {
            val15 = '';
        }
        if($('.choose:eq(1)').attr('checked')){
            val16 = '季付';
        }else {
            val16 = '';
        }
        if($('.choose:eq(2)').attr('checked')){
            val17 = '半年付';
        }else {
            val17 = '';
        }
        if($('.choose:eq(3)').attr('checked')){
            val18 = '年付';
        }else {
            val18 = '';
        }
        if($('.chooseAll').attr('checked')){
            val19 = '都可以';
        }else {
            val19 = '';
        }
        val10 = $('#bedroom').find('option:selected').text();
        val11 = $('#limit').find('option:selected').text();
        val12 = $('.area').val();
        val13 = $('.rent').val();
        val14 = $('.enter input').val();
    }
})



