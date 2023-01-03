如题，在微信端做一个手动拖动展示图片的列表页面，可采用以下代码
css代码如下:
```css
       *{margin: 0; padding: 0;}
        ul,li{list-style: none;}
        .container{display: -webkit-box; width: 100%; height: 600px; background: green; overflow-x: auto;}
        .chzn-choices{width: 20%; height: 200px; background: red; -webkit-box-flex: initial;}
        .chzn-choices:nth-of-type(2n){background: yellow;}
```

```html

<ul class="container">
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
</ul>
```

由此可见,
display:flex和diplay:-webkit-box还是有区别的,设定为box的父元素的子元素的宽度是固定的，
不会随父元素的宽度变化而变化,在flex布局下,就算所有子元素的宽度之和超出了父元素的宽度，
子元素还是会在父元素之内被“压缩”至刚好能铺满整个父元素，所以就算父元素设置了overflow:auto也不会出现滚动条，
如果子元素的宽度之和没有超过父元素，那么子元素的宽度按照css中设定的正常宽度来显示,
但是在box布局中,子元素的宽度如果超出了父元素，那么子元素的不会被“压缩”，只要父元素设置了overflow:auto，那么就会出现滚动条

2021年11月29日更新:
其实以上的代码还是可以使用flex来实现, 其实就是flex-shrink的应用而已
[参考文档:](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
```css
*{margin: 0; padding: 0;}
ul,li{list-style: none;}
.container{display: flex; width: 100%; height: 600px; background: green; overflow-x: auto;}

/*将flex-shrink设置为0, 那么当子元素的宽度超过容器的宽度时, 也不会被收缩.*/
.chzn-choices{width: 20%; height: 200px; background: red; flex-shrink: 0} 

.chzn-choices:nth-of-type(2n){background: yellow;}
```

```html

<ul class="container">
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
    		<li class="chzn-choices"></li>
</ul>
```
