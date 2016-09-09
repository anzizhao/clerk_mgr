<!-- 修改店员信息 -->
    <ul class="list edit-list">
        <li>
            <a href="#/modifyPwd">修改密码</a>
        </li>
        <li>
            {{if isBound}}
                <a href="">查看桌牌<span class="bound">已绑定</span></a>
                {{else}}
                <a href="#/bindCard">绑定桌牌</a>
            {{/if}}
        </li>
    </ul>
