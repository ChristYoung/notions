### Git

##### 本地初始化一个git仓库并推送到Github或者Gitee

 - 先在Gitee或者GitHub上创建一个库,(不要设置模板, 不要设置README.md文件) 如nest-zues
 - 在某个目录下使用cli工具创建一个工程, 如nest new nest-zues
 - git add *
 - git commit -m "first commit"
 - git remote add origin git@gitee.com:jayjayyoung123/nest-zues.git

##### 如何给仓库添加多个origin
 - 1.查看现有几个仓库
 - 2.添加一个远程仓库:
  ```
  git remote add [your origin name] [your origin repo url]   
  ```
 - 3. 推送代码
  ```
  git push [your origin name]
  ```