<!-- 店员详情－交易流水 -->
{{each main as entry i}}
    <div class="listview clerk-details-list">
        <div class="mon">
            <p class="time">{{ entry.date }}</p>
            <p>实收金额：<span class="font-num">¥{{ entry.num1 }}</span></p>
        </div>
        {{each main[i].details as item}}
            <div class="list-item">
                <div class="l">
                    <div class="l-name">[当面付]订单金额¥{{ item.num2 }}，商家优惠¥{{ item.num3 }}</div>
                    <div class="l-time">
                        <p>{{ item.time }}</p>
                    </div>
                </div>
                <div class="r">¥{{ item.num4 }}</div>	
            </div>
        {{/each}}
    </div>
{{/each}}
<div id="navigation"><a href="mockdata.json?page=1"></a></div>
