<!-- 店员管理首页 -->
{{if clerkNotNull}}
<div class="date-select">
    <label class="lbl">时间:</label>
    <select class="select">
        {{ each time as item i }}
        <option value="{{item.value}}">{{item.text}}</option>
        {{/each}}
    </select>
</div>
{{ each main as group i }}
    <div class="list-title">{{ main[i].title }}</div>
    {{ if main[i].eleId }}
    <ul id="list" class="list user_list">
    {{ else }}
    <ul class="list user_list">
    {{ /if}}
        {{each main[i].clerk_list as entry i}}
            <li class="item">
                <div class="btn_edit">编辑资料</div>
                <div class="btn_del">删除</div>
                <a href="#/details" class="clerk-item">
                    <span class="name">{{ entry.name }}</span>
                    <p class="item-bottom">
                        <span class="order_num icons">{{ entry.order_num }}笔</span>
                        <span class="money_num icons">{{ entry.money_num }}元</span>
                    </p>
                </a>
            </li>
        {{/each}}
    </ul>
{{/each}}
<div class="btn_group tc btn_group_bottom">
    <a class="btn btn-single" href="#/add">添加店员</a>
</div>
{{else}}
<div class="tc">
    <img class="img-null" src="img/img-null.png">
    <p class="clerk-null-txt">您还没有添加店员喔，现在去添加吧！</p>
    <div class="btn_group">
        <a href="#/add" class="btn btn_save">马上添加店员</a>
    </div>
</div>
{{/if}}
<div class="warm-tips">
    <i class="warm-tips-txt">扫描店长的桌牌进行支付，店员收不到消息的</i>
    <i class="icons ico-bulbs"></i>
</div>
    <!-- <a id="js_add_user" class="add_user" href="javascript:;">添加店员</a> -->
