# node-sass-tool
node-sass的使用demo，方便在不使用webpack的时候直接编译scss；并且加入postcss可以做雪碧图等处理

 研究了一下pocss-cli加入postcss-sass 没能实现，就直接使用node-sass转css了，业务通常也需要加入图片处理，前缀处理，所以也加上postcss，
并且加上fs.watch动态编译。

>编译命令 

>npm run build-css

