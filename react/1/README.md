
<h4>useEffect</h4>
为了在每次渲染后都能执行某些操作，使用useEffect 避免在componentDidMount和componentDidUpdate中重复执行。

<h4>useState</h4>
1、useState是单向数据流，state是数据值，通过setState来修改state。

```
 const [state,setState]=useState(0) 
```

单项数据流，数据改变只会影响后续的节点，
