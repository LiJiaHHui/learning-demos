在本个案例中，熟悉react组件的调用，以及组件数据的流动。

🐱‍🐉JSX 只是为 React.createElement(component, props, ...children) 函数提供的语法糖。

🐱‍🏍setState接受对象或者异步函数,可以用于修改state的值写法
```
this.setState({curInd:--this.state.curInd})
```

使用这种方式设置状态值时也要小心，因为setState是异步操作，可能无法保证立即获取状态变量的值。如果要使用更新后的state值，请使用带有setState的异步回调
```
this.setState({curInd:--this.state.curInd},function(){
  //callback
})
```

🎭css小知识
:root 与 var(),自定义一些css样式，比如颜色，作为一个全局变量可以在css中使用，有助于全局样式统一。
:root是一个伪类，表示文档根元素，