🐱‍🏍<h4>react中的无状态组件</h4>
react推荐使用函数组件，写法也很简单，组件就剩下一个render来渲染dom,数据通过props传入。
函数组件不会实例化，因此
-占用内存较少
-不能访问组件this中的对象，如this.ref、this.state
-不能访问生命周期
```
const Input=()=>{
  return render (){
  }
}
```