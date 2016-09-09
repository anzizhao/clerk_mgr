<!-- 新增店员 -->
<form action="">
    <ul class="add_user_form">
        {{each main as item i}}
            <li>
                <label>{{if item.isRequire}}<i>*</i>{{/if}}{{item.label}}:</label>
                {{if item.isPwd}}
                    <input id="txt_pwd" type="{{item.type}}" placeholder="{{item.placeholder}}" class="input_s1"><span id="ico_pwd_display" class="ico_pwd_display"></span>							
                {{else}}
                    <input type="{{item.type}}" placeholder="{{item.placeholder}}" class="input_s1">
                {{/if}}
            </li>
        {{/each}}
    </ul>
    <p class="tip">
        <span class="tip_error">错误信息</span>
        <span id="ico_bulb" class="ico_bulb"></span>
    </p>
    <div class="btn_group">
        <a href="#/list" class="btn btn_save">保存</a>
    </div>
</form>
