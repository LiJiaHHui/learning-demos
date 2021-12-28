在本个案例中，熟悉react组件的调用，以及组件数据的流动。

🐱‍🐉JSX 只是为 React.createElement(component, props, ...children) 函数提供的语法糖。

<h3>setState与异步</h3>
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

<h3>react中的super</h3>

class继承中通过super继承了父类的实例属性和原型属性，但是this是指向本实例。实例属性指的是在构造函数constructor中定义的属性,原型属性指的是不在构造函数中定义的属性,如toString👇。
```
 class A {
      constructor(name,color) {
      this.name = name;
      this.color = color;
    }
    // toString 是原型对象上的属性
    toString() {
      console.log('name:' + this.name + ',color:' + this.color);

    }
  }

 class B extends A{
  constructor() {
    super('cat','white');
  }
  toString() {
    console.log(super.toString());
  }
 }

 var cat = new B()
 cat.toString();  //=>name:cat,color:white
```

🎭css小知识
:root 与 var(),自定义一些css样式，比如颜色，作为一个全局变量可以在css中使用，有助于全局样式统一。
:root是一个伪类，表示文档根元素，