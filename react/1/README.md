
<h4>useEffect</h4>
为了在每次渲染后都能执行某些操作，使用useEffect 避免在componentDidMount和componentDidUpdate中重复执行。

<h4>useState</h4>
1、useState是单向数据流，state是数据值，通过setState来修改state。

```
 const [state,setState]=useState(0) 
```

单项数据流，数据改变只会影响后续的节点，

#### 单向数据流

数据流是指数据在组件之间的传递，单向数据流是指在数据流中改变某个数据，只会影响一个方向后的节点数据，并不影响整个数据流。

比如使用props，父组件传入的props值，就不应该被子组件改变，避免修改导致数据的错乱。

同样react中修改state状态，必须通过setState也是这个原因

#### react中的this

在网页开发中，this的指向一般是window、或者调用事件的对象，但react中this默认指向undefined，react中可以使用箭头函数、或者bind来显示改变this指向，使其指向当前的实例。

摘自官网的一段话
```
你必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定this。如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined。

这并不是 React 特有的行为；这其实与 JavaScript 函数工作原理有关。通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。
```
回调函数是指，函数作为一个参数被传递。回调函数丢失this是因为被函数调用，此时指向调用函数？
bind、apply、call的区别：bind不会立即执行，生成一个函数，appl和call都会立即执行，区别在于apply接受参数数组，call接受参数序列
