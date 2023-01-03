## Css Footer Stick
可以使用以下代码来实现一个footerStick
html:
```html
<div class="page-wrap">
  
		  <h1>Sticky Footer</h1>
		  <h2>with Fixed Footer Height</h2>
		  
		  <button id="add">Add Content</button>  
		     
		</div>
		
		<footer class="site-footer">
		  I'm the Sticky Footer.
		</footer>
```

css:
```css
* {
		  margin: 0;
		}
		html, body {
		  height: 100%;
		}
		.page-wrap {
		  min-height: 100%;
		  width: 500px;
		  margin: 0 auto;
		  /* equal to footer height */
		  margin-bottom: -142px; 
		}
		.page-wrap:after {
		  content: "";
		  display: block;
		}
		.site-footer, .page-wrap:after {
		  height: 142px; 
		}
		.site-footer {
		  background: orange;
		}
```

(ps: 具体可以参考本源码css目录下的footer-stick.html文件).