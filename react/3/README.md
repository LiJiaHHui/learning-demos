
<h4>组件组合</h4>

组件组合类似vue的插槽，父组件通过this.props.children来接收子组件的内容，

<h4>组合导出</h4>
组合一下组件的导出在同一个组件，注意一下写法就行了
```
export {default as Content} from './content'
```

<h4>渲染html字符串</h4>
react中提供了dangerouslySetInnerHtml来将dom字符串转换为dom节点
__html渲染动态数据
```
常规字符串写法
<p key={ind}>{item}</p>


动态插入dom节点
<p key={ind} dangerouslySetInnerHTML={{__html:`<a href="#"> ${item}</a>`}}></p>

````