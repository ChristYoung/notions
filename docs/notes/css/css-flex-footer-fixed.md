## flex实现footer吸底

在fullScreenDialog中实现底部position: fixed的另一种方式, 固定dialog的高度, 设置dialog为display: flex, flex-direction: column, 固定footer的高度, 另外设置其他元素的高度, 使得其能占满整个屏幕, 即可.
[在线示例](https://stackblitz.com/edit/stackblitz-starters-pfnvtr?file=index.html)


### HTML结构
```html
<div class="container">
    <div class="header"></div>
    <div class="content">
        <div class="body">
            xxx
        </div>
        <div class="footer"></div>
    </div>
</div>
```

### 对应的CSS
```css
html, body {
    height: 100%;
    margin: 0;
}

.container {
    display: flex;
    flex-direction: column;
    height: 500px; /* container的固定高度 */
    border: 1px solid #000; /* 可选，便于查看布局 */
}

.header {
    height: 20px;
    background-color: #ccc; /* 可选 */
}

.content {
    display: flex;
    flex-direction: column;
    flex: 1; /* content占据剩余空间 */
    min-height: 0; /* 允许content在flexbox中调整高度 */
}

.body {
    flex: 1; /* body占据content的可用空间 */
    overflow-y: auto; /* 当内容过多时允许body滚动 */
    background-color: #f1f1f1; /* 可选 */
}

.footer {
    height: 20px;
    background-color: #ccc; /* 可选 */
    flex-shrink: 0; /* 防止footer被挤压，始终保持固定高度 */
}

```

### 解释：
- container：与之前相同，使用 flexbox 来实现高度布局。
- content：flex: 1 确保 content 占据剩余空间，并且 min-height: 0 允许内容按需调整。
- body：flex: 1 使 body 在 content 中占据最大可用空间，并使用 overflow-y: auto 控制内容的滚动。
- footer：flex-shrink: 0 确保 footer 始终固定在 content 的底部，不会被压缩。
- 这样，当 body 的内容不多时，footer 会贴合在底部；当 body 内容超出可见范围时，body 内部会出现滚动条，footer 依然保持在底部不变。

