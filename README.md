# owlet5-seed

owlet5-seed是基于angular5实现的前端种子工程

## 环境准备

1. 源码管理: Git
2. 开发IDE: VSCode
3. 包管理: nodejs@6.11.0  npm@5.5.1
4. 浏览器: Chrome

## 快速指南

1. 使用Git clone，将代码clone到本地

2. 执行`npm install`安装依赖

    > 安装依赖前，执行以下命令设置npm下载地址  
    > `npm config set registry=http://172.18.24.36:7001/`  
    > `npm config set SASS_BINARY_SITE=http://172.18.24.51:8081/nexus/content/sites/gs-assets/node/sass/`

3. 执行`npm start`开启本地开发服务器，并自动打开浏览器访问`http://localhost:4200`

    > `ts`, `scss`, `html`修改后自动编译。通知浏览器刷新

4. 执行`npm run test`运行单元测试

5. 执行`npm run lint`运行代码检查

## 发布

1. 执行`npm run dist`执行构建，文件会放入`dist`目录

2. 执行`npm run upload`，上传到内网cnpm

## 开发指南 
[wikis](http://172.18.3.103/vNextDevTechs/owlet5-seed/wikis)
