


var nowX = 0;
var flag = null;
var idx = null;
var user_id;
$("#list").on("touchstart", "a", function (e) {
    idx = $(this).parent().index();
});
etouch("#list", "div", function (e) {
   e.stopPropagation();
   showMsg("删除店员后，该账号将无法再登录，<br>且不能以同样的账号再添加店员，<br>确认删除吗？",2);
	user_id = $(this).parent();
	$('#js_del').click(function(e){
       e.stopPropagation();
		user_id.remove();
	});
});
$("body").on("touchstart","#list a", function () {
    var i = $("#list li a.on").parent().index();
    $("#list a.on").removeClass('on');
    $("#list a").eq(i).css({'-webkit-transform':'translate3d(0,0,0)','-webkit-transition':'all .2s ease'});
    setTimeout(function() {
        $("#list a").eq(i).css({'-webkit-transition':'none'});
    },210);
});
$("body").on("touchend","#list a", function () {
    if(flag == 1) {
        $("#list a").eq(idx).addClass('on');
    } else if(flag == 2) {
        $("#list a").eq(idx).removeClass('on');
        $("#list a").eq(idx).css({'-webkit-transform':'translate3d(0,0,0)','-webkit-transition':'all .2s ease'});
        setTimeout(function() {
            $("#list a").eq(idx).css({'-webkit-transition':'none'});
        },210);
    }
});
etouch("#list", "a", function () {
}).on('swiper',function(e,touch) {
    var _this = this;
    if (touch.distanceX < 0) {
        if(touch.distanceX < -30) {
            flag = 1;
        } else {
            flag = 2;
        }
        $(_this).css("-webkit-transform",'translate3d('+ touch.distanceX +'px,0,0)');
    } else {
        touch.distanceX > 15 ? touch.distanceX = 15 : touch.distanceX;
        $(_this).css("-webkit-transform",'translate3d('+ touch.distanceX +'px,0,0)');
    }

}).on('left',function(e,touch) {
    var _this = this;
    if(flag == 1) {
        $(_this).addClass('on');
    } else if(flag == 2) {
        $(_this).removeClass('on');
        $(_this).css({'-webkit-transform':'translate3d(0,0,0)','-webkit-transition':'all .2s ease'});
        setTimeout(function() {
            $(_this).css({'-webkit-transition':'none'});
        },210);
    }
    flag = null;
}).on('right',function(e,touch) {
    $(this).css({'-webkit-transform':'translate3d(0,0,0)','-webkit-transition':'all .2s cubic-bezier(0.66, 0.06, 0.43, 1.33)'});
    setTimeout(function() {
        $(this).css({'-webkit-transition':'none'});
    },210);
    flag = null;
});
