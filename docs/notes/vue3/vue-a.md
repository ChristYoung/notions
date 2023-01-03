# Vue 3 + TypeScript + Vite
 - [在外部ts文件中引用 pinia的store, GitHub: git@github.com:cornflourblue/vue-3-pinia-jwt-authentication-example.git]([link](https://jasonwatmore.com/post/2022/05/26/vue-3-pinia-jwt-authentication-tutorial-example))

 - Vue3中在pinia的store中定义的state, 如果是一个对象的话, 在外部解构会变成一个reactive, 依然是一个响应式数据, 如果state是一个基础变量的话, 在外部解构就不是一个响应式数据, 需要通过storeToRefs将其变成响应式.(ps: 因此为了简单起见, 不管state是对象还是基础类型变量, 解构导出的时候, 统一使用storeToRefs将其变成Ref变量)--出自Vue项目, sonk-vite.