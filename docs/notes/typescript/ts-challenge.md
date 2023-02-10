--------------------------------
### Typescript类型体操
 - [type-challenges项目地址](https://gitee.com/jayjayyoung123/type-challenges/tree/master)
 - [修睿](https://www.bilibili.com/video/BV1a34y1B7E7/?spm_id_from=pageDriver)
 - [阿宝](https://www.bilibili.com/video/BV1qv4y1P7D2?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click)
 - 实现一个通用First，它接受一个数组T并返回它的第一个元素的类型(extends 表示一种类型约束):
  ```typescript
  type First<T extends any[]> = T extends [] ? never : T[0];
  ```

 - 实现一个Pick.
  ```typescript
  type MyPick<T, K extends keyof T> = { [P in K]: T[P] };
  ```

 - 实现一个ReadOnly.
  ```typescript
  type MyReadOnly<T> = { readonly [P in keyof T]: T[P] };
  ```

 - 实现一个Tuple, (类型中遍历数组: T[number]).
  也就是将常量数组 const arr = ['age', 'name', 'gender']; 转换成对象类型 { age: 'age', name: 'name', gender: 'gender' }
  ```typescript
  type TupleToObject<T extends readonly (string | number | symbol)[]> = { [P in T[number]]: P };
  ```

- 将一个字符串数组转换成字面量类型
```typescript
const arrR = ['a', 'b', 'c'] as const;
type TupleArr = typeof arrR[number];
```

 - 实现一个Exclude和Extract
  ```typescript
  type MyExclude<T, U> = T extends U ? never : T;
  type MyExtract<T, U> = T extends U ? T : never;
  ```

  - 实现一个ValueOf工具类型
  ```typescript
  // keyof操作符可以用于获取某种类型的所有键，其返回类型是联合类型
  // typeof 操作符用于获取变量的类型。因此这个操作符的后面接的始终是一个变量，且需要运用到类型定义当中
  // TypeScript中keyof和typeof的区别. https://blog.csdn.net/GoldenLegs/article/details/112966081

  // 如何在 Typescript 中实现通用的 Valueof<T> 辅助泛型, (ps: 要求T必须是一个字面量类型as const).
  // https://zhuanlan.zhihu.com/p/437553121.
  export type ValueOf<T> = T[keyof T];

  const ParameterLib = {
  ACTION: 'action',
  TOKEN: 'token',
  HOSPITALID: 'hospitalId',
  USERNAME: 'userName'
  } as const;

  export type ParameterType = ValueOf<typeof ParameterLib>; // "action" | "token" | "hospitalId" | "userName"
  ```

  - TypeScript中的infer是什么 ?
   infer声明只能出现在extends子语句中，在协变位置上同一个类型变量的多个候选类型会被推断为联合类型；在逆变位置上，同一个类型变量的多个候选类型则会被推断为交叉类型。
   infer声明的类型变量, 只在条件类型的true分支中可以使用.<br />
   [阿宝哥关于infer的讲解:](https://www.bilibili.com/video/BV1qv4y1P7D2?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click) <br />
   [修睿关于infer的讲解](https://www.bilibili.com/video/BV1uB4y1m7Hv/?spm_id_from=333.788)
 ```typescript
// 1. 题目要求: 返回Promise对象中的嵌套类型.
// Promise<string> ===> string
type UnpackedPromise<T> = T extends Promise<infer X> ? X : never;

// 2. 题目要求: 返回string[]中的元素类型(string), 返回() => string中的string
type T0 = string[];
type T1 = () => string;
type UnpackedArray<T> = T extends (infer U)[] ? U : never;
type UnpackedFn<T> = T extends (...args: any) => infer U ? U : never;

// 特别地, 我们可以写如下通用类型来获取, 数组类型中元素的类型, 函数类型中返回值的类型, 以及Promise中返回值的类型等.
type Unpacked<T> = 
T extends (infer U)[] ? U:
T extends (...args: any) => infer U ? U :
T extends Promise<infer U> ? U :
T;

type T0 = Unpacked<string>; // string;
type T1 = Unpacked<string[]>; // string;
type T2 = Unpacked<() => string>; // string;
type T3 = Unpacked<Promise<string>>; // string;
type T4 = Unpacked<Unpacked<Promise<string>[]>>; // string; 还可以嵌套使用

 ```

- 定义一个class数组类型, 数组的元素都是可以new的元素
  ```typescript
    export type ClassType<T> = { new (...args: any[]): T };
  ```
  