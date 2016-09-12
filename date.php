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
		time: [
			{
				text: '今日',
				value: '1'
			},
			{
				text: '最近7日',
				value: '7'
			},
			{
				text: '最近30日',
				value: '30'
			}
		]
	}
}";
//输出jsonp格式的数据
echo $jsoncallback . "(" . $json_data . ")";
?>