
<h4>组件组合</h4>

组件组合类似vue的插槽，父组件通过this.props.children来接收子组件的内容，

<h4>组合导出</h4>
组合一下组件的导出在同一个组件，注意一下写法就行了
```
export {default as Content} from './content'
```