### getBoundingClientRect().width和offsetWidth 区别
[参考文章](https://www.jianshu.com/p/d9e59ae85117)

getBoundingClientRect().width 和 offsetWidth的结果基本是一致的。
但是当元素进行了transfrom 操作，getBoundingClientRect().width展示的是操作后的真实渲染宽度。而offsetWidth是未transfrom 操作的宽度。
