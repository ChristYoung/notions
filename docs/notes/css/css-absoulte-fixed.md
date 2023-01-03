### 如何让一个元素相对于父元素固定定位?

[参考链接文章](https://blog.csdn.net/weixin_41829196/article/details/121857401)

之前在项目中，遇到了一个场景，需要实现相对于父元素的fixed定位：在父元素内拖动滚动条时，"fixed"定位的元素不能滑动，在外层拖动滚动条时，父元素及父元素内的所有元素跟着一起滑动。但是position: fixed是相对于窗口进行的定位，不能直接实现我们需要的效果。

我们想让特定子元素相对于父元素"fixed"定位，也就是说，剩余的子元素不定位。那我们可以分开来想，如果添加一个祖先元素assistor，有两个祖先元素，一个用于辅助定位，一个用于包裹不定位的内容，这个问题不就解决了吗？

实质上是child相对于assistor进行absolute定位，parent内的内容自己负责展示。只要assistor和parent一样大，看起来就像是子元素child相对于父元素parent固定定位了。具体原理是position: absolute;的元素会相对于第一个设置了position: relative;的祖先元素进行定位，我们将assistor设置为position: reletive;，滚动条是在parent中的，这样"fixed"定位和parent内的内容滚动就都实现了。

```html
<div class="assistor">
        <div class="parent">
          <div class="child">固定定位区域</div>
          <div class="placeholder">内容区域</div>
        </div>
    </div>
```

```css
.assistor {
  position: relative; /*关键点*/
  display: block;
  width: 500px;
  height: 300px;
  margin: 100px auto 0 auto;
  background-color: #ddd;
}

.parent {
  width: 500px;
  height: 300px;
  background-color: #888;
  overflow: auto; /*关键点*/
}

.child {
  position: absolute; /*关键点*/
  width: 120px;
  height: 120px;
  margin: 100px 50px;
  background-color: #333;
  color:#fff;
}

.placeholder {
  width: 1000px;
  height: 1000px;
  color:#fff;
}
```

