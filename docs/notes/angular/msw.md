## 总结在Angular项目中安装和使用msw@1.2.3来mock数据的要点
- 安装msw@1.2.3
- 执行 ```npx msw init src/ --save```, 这样会自动在src目录下生成mockServiceWorker.js文件
- 手动在src目录下创建一个mock目录, 并创建browser.ts和handler.ts文件
- browser.ts文件中引入handler.ts文件, 并调用setupWorker方法：
 ```typescript
  import { setupWorker, reset } from 'msw';
  import { handlers } from './handler';
  export const worker = setupWorker(...handlers);
 ```
- handler.ts文件中编写mock数据：
 ```typescript
  import { rest } from 'msw';
  import { setupWorker, reset } from 'msw';
  import { handlers } from './handler';
  export const worker = setupWorker(...handlers);
  export const handlers = [
    rest.get('/api/user', (req, res, ctx) => {
      return res(
        ctx.json({
          name: '张三',
          age: 18,
        })
      );
    }),]
 ```
- 在main.ts文件中引入browser中的worker：
```typescript
 import {} from './mock/browser';
 worker.start();
```
- 注意在angular.json中要配置将mockServiceWorker.js文件添加到assets中：
```json
"assets": [
    "src/favicon.ico",
    "src/assets",
    "src/mockServiceWorker.js"
  ],
```
- 如果启动后，拦截请求报错: ``` Type Error: response2.headers.all is not a function ```, 需要安装``` npm i headers-polyfill@3.2.5 -D ```
