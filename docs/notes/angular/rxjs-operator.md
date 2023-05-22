### Rxjs操作符

##### mergeMap和concatMap的区别

[参考文章: Practical RxJS In The Wild 🦁— Requests with concatMap() vs mergeMap() vs forkJoin() 🥊(需要翻墙)](https://medium.com/angular-in-depth/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293#:~:text=RxJS%20mergeMap%20%28%29%20executes%20requests%20in%20parallel%2C%20the,arrive%20in%20changed%20order%20due%20to%20network%20conditions%E2%80%A6)

mergeMap和concatMap都可以拍平Observable, 但是区别是, mergeMap对于输入的observable是立即进行合并个拍平操作, 但是concatMap必须要等上一个observable完结才会进行合并和拍平操作

```typescript
// concatMap: 对于输入的每一个id, 都必须等上一个id调用完item/${id}接口后, 才会执行下一个
getItems(ids: number[]): Observable<Item> {
  return from(ids).pipe(
     concatMap(id => <Observable<Item>> this.httpClient.get(`item/${id}`))
  );
}

// mergeMap: 只要有id输入进来, 都会立即调用item/${id}接口, 不管前一个传入的id调用接口是否完成
getItems(ids: number[]): Observable<Item> {
  return from(ids).pipe(
     mergeMap(id => <Observable<Item>> this.httpClient.get(`item/${id}`))
  );
}
```
