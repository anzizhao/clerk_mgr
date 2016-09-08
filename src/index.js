// 店员管理首页
var clerk_list_data = {
    clerkNotNull: true,
    time: [
        {
            text: '今日',
            value: new Date()
        },
        {
            text: '最近7日',
            value: ''
        },
        {
            text: '最近30日',
            value: ''
        }
    ],
    main: [
        {
            title: '店员',
            eleId: true,
            clerk_list: [
                {
                    name: '王二',
                    order_num: 23,
                    money_num: 232.22
                },
                {
                    name: '风清扬',
                    order_num: 13,
                    money_num: 12.02	
                } 
            ]
        },
        {
            title: '其他',
            eleId: false,
            clerk_list: [
                {
                    name: '店长订单',
                    order_num: 20,
                    money_num: 152.22
                },
                {
                    name: '微信店铺订单',
                    order_num: 43,
                    money_num: 212.02	
                } 
            ]
        }
    ]
};
var clerk_list_html = template('js-clerk_list', clerk_list_data);

// 店员详情
var clerk_details_data = {
    entry: {
        name: '王二',
        order_num: '12',
        money_num: '123'
    },
    main: [
        {
            date: '2016年03月12日',
            num1: '232', //金额总数
            details: [
                {
                    num1: '232', //金额总数
                    num2: '25', //订单金额
                    num3: '0.4', //商家优惠
                    num4: '123', //实收金额
                    time: '14:42:23'
                },
                {
                    num1: '333', //金额总数
                    num2: '15', //订单金额
                    num3: '0.14', //商家优惠
                    num4: '113', //实收金额
                    time: '14:32:23'
                }
            ]
        },
        {
            date: '2016年03月11日',
            num1: '132', //金额总数
            details: [
                {
                    num1: '132', //金额总数
                    num2: '15', //订单金额
                    num3: '10.4', //商家优惠
                    num4: '233', //实收金额
                    time: '10:42:23'
                },
                {
                    num1: '333', //金额总数
                    num2: '15', //订单金额
                    num3: '0.14', //商家优惠
                    num4: '443', //实收金额
                    time: '14:32:23'
                }
            ]
        },
        {
            date: '2016年03月10日',
            num1: '132', //金额总数
            details: [
                {
                    num1: '333', //金额总数
                    num2: '15', //订单金额
                    num3: '0.14', //商家优惠
                    num4: '443', //实收金额
                    time: '14:32:23'
                }
            ]
        }
    ]
};
var clerk_details_html = template('js-clerk_details', clerk_details_data);

// 新增店员帐号
var clerk_entry_data = {
    main: [
        {
            label: '店员',
            type: 'text',
            placeholder: '姓名',
            isRequire: true //必填
        },
        {
            label: '帐号',
            type: 'tel',
            placeholder: '请输入店员的手机号',
            isRequire: true
        },
        {
            label: '密码',
            type: 'password',
            placeholder: '请输入密码',
            isRequire: true,
            isPwd: true
        },
        {
            label: '商户号',
            type: 'tel',
            placeholder: '请输入商户号（非必填）',
            isRequire: false
        }
    ]
}
var add_clerk_html = template('js-add-clerk', clerk_entry_data);

//修改店员信息
var edit_list_data = {
    isBound: false
}
var edit_list_html =  template('js-edit-list', edit_list_data);

//绑定桌牌
var bind_card_html = template('js-bind-card', {});

//修改密码
var modify_pwd_data = {
    main: [
        {
            label: '店员姓名',
            type: 'text',
            placeholder: '姓名',
            isRequire: false //必填
        },
        {
            label: '店员账号',
            type: 'tel',
            placeholder: '请输入店员的手机号',
            isRequire: false
        },
        {
            label: '提现密码',
            type: 'password',
            placeholder: '请输入密码',
            isRequire: false,
            isPwd: true
        },
        {
            label: '新密码',
            type: 'password',
            placeholder: '请输入密码',
            isRequire: false,
            isPwd: true
        }
    ]
}
var modify_pwd_html = template('js-modify-pwd',modify_pwd_data);

var list = function () { 
    document.getElementById('content').innerHTML = clerk_list_html;
};

var details = function () { 
    document.getElementById('content').innerHTML = clerk_details_html;
    $('#masonny-div').infinitescroll({
        navSelector  : "#navigation",   // 页面分页元素(成功后会被隐藏)
        nextSelector : "#navigation a", // 需要点击的下一页链接，和2的html要对应
        itemSelector : ".clerk-details-list"  , // ajax回来之后，每一项的selecter
        //（比如每篇文章都有item这个class）
        debug: true, //启用调试信息
        animate: false, //当有新数据加载进来的时候，页面是否有动画效果，默认没有
        extraScrollPx: 150, //滚动条距离底部多少像素的时候开始加载，默认150
        bufferPx: 40, //载入信息的显示时间，时间越大，载入信息显示时间越短
        errorCallback: function(errorType) {
            if( errorType === 'done'){

                //TODO 
                // finish 
            }
            // alert('error:'+errorType);
        }, //当出错的时候，比如404页面的时候执行的函数
        localMode: true, //是否允许载入具有相同函数的页面，默认为false
        dataType: 'json',//可以是json
        template: function(data) {
            //data表示服务端返回的json格式数据，这里需要把data转换成瀑布流块的html格式，然后返回给回到函数
            // return data;
            var html = template('js-clerk_details_list',data);
            document.getElementById('masonny-div').innerHTML += html;
        },
        loading: {
            img: "img/loading.gif",
            msgText: "",
            finishedMsg: '没有更多记录了',
            selector: '.loading' // 显示loading信息的div
        }
    },function(newElems) {
        //程序执行完的回调函数
    })

    //打开 actionSheet
    var mask = $('#mask');
    var weuiActionsheet = $('#weui_actionsheet');

    $("#js-ico-setup").click(function(){
        showActionSheet();
    });

    function showActionSheet(){
        weuiActionsheet.addClass('weui_actionsheet_toggle');
        mask.show().focus()//加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
        .addClass('weui_fade_toggle').one('click', function () {
            hideActionSheet(weuiActionsheet, mask);
        });
    }
    $('#actionsheet_cancel').on('click', function () {
        hideActionSheet(weuiActionsheet, mask);
    });

    function hideActionSheet(weuiActionsheet, mask) {
        weuiActionsheet.removeClass('weui_actionsheet_toggle');
        mask.hide().removeClass('weui_fade_toggle');
    }

    $("#js-del-clerk").click(function(){
        hideActionSheet(weuiActionsheet, mask);
        showMsg("删除店员后，该账号将无法再登录，<br>且不能以同样的账号再添加店员，<br>确认删除吗？",2)
    });
};

var add = function() {
    document.getElementById('content').innerHTML = add_clerk_html;
}

var editInfo = function(){
    document.getElementById('content').innerHTML = edit_info_html;
}

var editList = function(){
    document.getElementById('content').innerHTML = edit_list_html;
}

var bindCard  = function(){
    document.getElementById('content').innerHTML = bind_card_html;
}

var modifyPwd = function(){
    document.getElementById('content').innerHTML = modify_pwd_html;
}

// 路由配置
var routes = {
    '/list': list,
    '/details': details,
    '/add': add,
    '/editInfo': editInfo,
    '/editList': editList,
    '/bindCard': bindCard,
    '/modifyPwd': modifyPwd
}
var router = Router(routes);

router.init(['/list']);

function hideMsg(){
    $('#js_muck').hide();
    $('li a').removeClass('on').css({'-webkit-transform':'translate3d(0,0,0)','-webkit-transition':'all .2s ease'});
}
$('#js_closeMsg').click(hideMsg);

// $('body').click(function(){
// 	$('li a').removeClass('on').css({'-webkit-transform':'translate3d(0,0,0)','-webkit-transition':'all .2s ease'});
// })
$('#js_add_user').click(function(){
    if($('#list li').length >= 2 ) {
        showMsg('开通VIP，拥有更多帐号特权喔！',1,'马上开通');
    }else {
        // window.location= ''
    }
});
function showMsg(msg,length,btnName){
    $('#js_muck').show();
    $('#single_btn,#double_btn').hide();
    if(length == 1){
        $('#single_btn').show();
        $('#single_btn .btn-normal').text(btnName);
    }
    if(length == 2){
        $('#double_btn').show();
    }
    $('#msg').html(msg);
}

