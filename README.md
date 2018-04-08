# node-sass-tool
node-sass的使用demo，方便在不使用webpack的时候直接编译scss；并且加入postcss可以做雪碧图等处理

 研究了一下pocss-cli加入postcss-sass 没能实现，就直接使用node-sass转css了，业务通常也需要加入图片处理，前缀处理，所以也加上postcss，
并且加上fs.watch动态编译。

>编译命令 

>npm run build-css

### 后续补充
```text
├── build-scss.js
├── css
├── node_modules
├── package.json
├── postcss.config.js
├── README.MD
└── scss.config.js 输入输出css的路径

```
### 功能就是做个sass编译，postcss处理

**postcss.config.js是post-css模拟scss编译 试验品，因为并不是真正的scss编译，有一些语法都不支持比如@function,所以就废弃了**

### 运行方式

- 在scss.config.js里配置输入输出的样式文件路径
- npm run build-css
