😎<h3>canvas签名项目</h3>
✨<h4>获得2D环境</h4>
使用canvasAPI前，需要：获得到canvas对象&&引用2D环境。虽然canvas也可以在3D环境使用，作为初学还是从2D入手。
通过getContext方法引用2D环境👇
```
  const canvas=document.getElementById("canvas")
  const context =canvas.getContext('2d')
```
context拿到方法后就可以使用API了
本项目使用了lineCap线条端点样式、fillStyle填充颜色、lineWidth线条宽度等API，更多[可参考](https://www.canvasapi.cn/)
😯<h4>遇到的问题</h4>
-首先是签名功能使用的touchstart、touchmove只能在移动端使用
-canvas注意不要设置得太宽太高，有滚动条会影响touch方法的