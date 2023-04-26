### decodeURIComponent 和 decodeURI 以及unescape的定义和区别

- [参考地址](https://www.cnblogs.com/konglxblog/p/15993407.html#:~:text=decodeURI%20%28%29%20%E5%87%BD%E6%95%B0%E5%8F%AF%E5%AF%B9%20encodeURI%20%28%29%20%E5%87%BD%E6%95%B0%E7%BC%96%E7%A0%81%E8%BF%87%E7%9A%84%20URI%20%E8%BF%9B%E8%A1%8C%E8%A7%A3%E7%A0%81%E3%80%82,%28%29%20%E5%87%BD%E6%95%B0%E5%8F%AF%E5%AF%B9%20encodeURIComponent%20%28%29%20%E5%87%BD%E6%95%B0%E7%BC%96%E7%A0%81%E7%9A%84%20URI%20%E8%BF%9B%E8%A1%8C%E8%A7%A3%E7%A0%81%E3%80%82%20%E4%BB%8EW3C%E7%9A%84%E5%AE%9A%E4%B9%89%E5%92%8C%E7%94%A8%E6%B3%95%E6%9D%A5%E7%9C%8B%EF%BC%8C%E4%B8%A4%E8%80%85%E6%B2%A1%E6%9C%89%E4%BB%80%E4%B9%88%E5%8C%BA%E5%88%AB%EF%BC%8C%E4%BD%86%E6%98%AF%E4%B8%A4%E8%80%85%E7%9A%84%E5%8F%82%E6%95%B0%E6%98%AF%E6%9C%89%E5%8C%BA%E5%88%AB%E7%9A%84%EF%BC%9A)

- unescape: 已经被废弃, 可以使用 decodeURI代替.
- decodeURI() 函数可对 encodeURI() 函数编码过的 URI 进行解码.
- decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码.
- 从W3C的定义和用法来看，两者没有什么区别，但是两者的参数是有区别的
可以看出encodeURI和decodeURI对URI的特殊字符是没有编码和解码能力的，实际项目中我们一般需要get请求的方式在地址栏中拼接一些参数，但是参数中如果出现#，/,&这些字符，就必须要用decodeURIComponent了，不然这些特殊字符会导致我们接收参数的错误

<br />

### 定义和用法

encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。

语法
encodeURIComponent(URIstring)

参数 描述

URIstring 必需。一个字符串，含有 URI 组件或其他要编码的文本。

返回值

URIstring 的副本，其中的某些字符将被十六进制的转义序列进行替换。

说明

该方法不会对 ASCII 字母和数字进行编码，也不会对这些 ASCII 标点符号进行编码： - _ . ! ~ * ' ( ) 。

其他字符（比如 ：;/?:@&=+$,# 这些用于分隔 URI 组件的标点符号），都是由一个或多个十六进制的转义序列替换的。

(1) decodeURIComponent(url) 函数

定义和用法

decodeURIComponent() 函数可把字符串作为 URI 组件进行解码。

语法

decodeURIComponent(URIstring)

参数 描述

URIstring 必需。一个字符串，含有 URI 组件或其他要解码的文本。

返回值

URIstring 的副本，其中的某些字符被十六进制的转义序列转换成对应的ACSII字符。

