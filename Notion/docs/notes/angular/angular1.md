--------------------------------

## Angular tips

 - .package.json中的build设置"ng build --base-href ./"可以使打包后的文件直接获取到index.html所在路径的本地资源

 - .ts-config.json 中的compilerOptions下的baseUrl设置根路径，在ts文件中import时可以使用绝对路径

 - .Typescript描述对象字面量的类型(可索引接口) const a: { [key: string]: any } <==> const a: Record<string, any>;

 - . SystemJsNgModuleLoader

 - . 运行ng serve --host xxx.xxx.x.xxx（自己的ip地址）,然后别就可以通过你的ip地址访问了

 - . 定制化模块如果引入了公用模块, 并且定制化的某个路由名和公用路由名一致的话, 那么定制化模块的路由会被引入的公用路由覆盖

 - . Angular动态引入一个类Tess.
  ```typescript
  import(`app/c-thszxyy/tess`).then(tess => {
        console.log('看看是什么', tess);
        console.log('看看是什么', tess.Tess);
        console.log('看看是什么', new tess.Tess()); // 被实例化了
      });
  ```

 - Angular 表单, 在执行提交时才触发表单验证
 ```typescript
  symptom: [null, { validators: [Validators.required], updateOn: "submit" }], // 患者主诉
  medicalHistory: [null, { validators: [Validators.required], updateOn: "submit" }], // 既往史
  illSummary: [null, { validators: [Validators.required], updateOn: "submit" }], // 病史摘要
  diagCode: [null, { validators: [Validators.required], updateOn: "submit" }], // 主诊断
  subDiagnose: [null], // 副诊断
 ```
 - 可以使用Angular 自带的keyvalue管道, 来对object进行ngFor操作
   ```html
   <td nzWidth="160px" *ngFor="let cnt of item.cntInfo.AM | keyvalue" (click)="openSrcViewModal(item.deviceId, cnt.key, cnt?.value?.sourceTotal)">
              {{cnt?.value?.sourceTotal === 0 ? '未放号' : cnt?.value?.sourceTotal }}
            </td>
   ```

 - ng update
  在执行ng update 的时候, 有的Angular包(如: ngx-viewer, ngx-barcode), 因为长时间不维护, 已经不支持最新版的Angular, 此时update的会报错:
  ```typescript
  Package "ngx-viewer" has an incompatible peer dependency to "@angular/common" (requires "^8.2.2" (extended), would install "14.2.8").
  Package "ngx-barcode" has an incompatible peer dependency to "@angular/core" (requires "^4.0.0" (extended), would install "14.2.8").
  ```
  解决办法: ng update --force
      