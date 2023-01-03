### RxJs的基本概念.

 - [RxJs入门](https://www.bilibili.com/video/BV1yF411P7TD?spm_id_from=333.999.0.0&vd_source=331e677ebe8fb9f71371d84f2131be4f).
 - [RxJs基础](https://www.bilibili.com/video/BV1UT411E7WK?spm_id_from=333.999.0.0&vd_source=331e677ebe8fb9f71371d84f2131be4f).


| 英文         | 中文       | 语义化                                                                                                                                                                                                                       |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Observable   | 可观察对象 | 承载rxjs操作符的类                                                                                                                                                                                                           |
| subscribe    | 订阅(动作) | 订阅有两种属性: <br />1. 是初始化的时候定义这个订阅中有什么样的操作, 会返回什么样的值<br /> 2. 执行时作为方法, 将观察者作为参数传进去, 让观察者看到有什么值, 相当于Promise中的resolve, reject(定义传入值)和then(观察传入值). |
| Observer     | 观察者     | 值变化时, 我们应该作何处理                                                                                                                                                                                                   |
| Subscription | 订阅处理   | 可以调用unsubscribe来取消订阅                                                                                                                                                                                                |
| Subscriber   | 订阅者     | 订阅者由观察者的参数实例化, 并且继承了订阅处理, 可以理解为既是观察者又是订阅处理                                                                                                                                             |


<img :src="$withBase('/rxjs.jpg')" alt="foo">

```typescript

import { Observable } from 'rxjs';
(() => {
    const _instance = new Observable(subscriber => {
        subscriber.next(1);
        subscriber.complete();
    });
    _instance.subscribe(() => {
        next: (val) => console.log(`hello ${val}`),
        complete: () => console.log('i have been already finished~')
    });
})();

```

### Promise与Observable的区别?

- Promise的意思为承诺, 也就是不管成功与否, 不管你看不看, 我都要做, 自然也就无法取消.
- Observable的意思是可观察对象, 可以理解为只有进行了观察, 才会触发变更, 如果不观察就不会发生变化.

### 订阅与观察是什么区别?

 - 宏观上两个词可以互用.
 - 比如Observable也可以改成可订阅对象, 不进行订阅就没法产生值, 都是一样的.
 - Subscriber基本可以替代Observer(也就是说, 当我说订阅者的时候, 其实就是观察者).
 - 订阅者 = 观察者 + 订阅处理