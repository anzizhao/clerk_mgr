<?php
header('Content-type: application/json');
//获取回调函数名
$jsoncallback = htmlspecialchars($_REQUEST ['jsoncallback']);
//json数据
// $json_data = '["customername1","customername2"]';
$json_data = "{
	error: 0,
	msg: '',
	data: {
		section: [
	    	{
	    		title: '店员',
	    		eleId: true,
	    		list: [
		    		{
		    			clerkId: '123', //店员ID
		    			name: '王二', //店员姓名
		    			order_num: 23, //订单数
		    			money_num: 232.22, 	//实收金额
						isBound: true //是否绑定桌牌
		    		},
		    		{
		    			clerkId: 123, //店员Id
		    			name: '风清扬',
		    			order_num: 13,
		    			money_num: 12.02,
		    			isBound: false
		    		} 
	    		]
	    	},
	    	{
	    		title: '其他',
	    		eleId: false,
	    		list: [
		    		{
		    			clerkId: '456', //店员Id
		    			name: '店长订单',
		    			order_num: 20,
		    			money_num: 152.22,
						isBound: false //是否绑定桌牌
		    		}
	    		]
	    	}		    	
	    ]
    }
}";
//输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
?>