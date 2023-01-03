---------------------------

## 构建Angular Lib的步骤
### 以下供参考
https://medium.com/@nikolasleblanc/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e (需要翻墙)
https://angular.cn/guide/creating-libraries

1. 在任意空位置执行ng new xxx新建一个Angular项目.
2. 执行npm install ng-packagr -D.
3. 在生成好的Angular项目的src同级目录下新建一个projects文件夹.
4. 在projects文件夹下执行ng generate library xxx(库的名字), 它会默认帮我们安装好ng-packager.json.
5. 在库的src/lib目录下开发你的库.
6. 开发完成后, 可以使用 CLI 命令来构建、测试和 lint 这个项目.
   * ng build my-lib
   * ng test my-lib
   * ng lint my-lib
7. 执行 ng build之后会生成一个dist目录, 进入到这个dist目录然后执行 npm pack会在dist目录下生成一个my-component-library-0.0.0.tgz, 0.0.0是从package.json的version中同步过来的.
8. 其他Anglar应用可以执行 npm install ../some_relative_path/dist/my-component-library-0.0.0.tgz来安装你的库.
9. publish your library on npm.
10. 发布到npm 上后, 其他Angular应用想要使用, 执行npm install xxx, 此处的xxx指的是projects目录下的package.json的name, 而不是整个项目下的package.json的name.