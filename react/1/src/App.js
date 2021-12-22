import './App.css';
// useEffect,
import { useState  } from 'react';
const picMap=[
  'https://lijiahhui.github.io/image/%E6%9D%BE%E9%9B%80.jpg',
  'https://lijiahhui.github.io/image/%E7%81%AB%E7%84%B0%E9%B8%9F.jpg',
  'https://lijiahhui.github.io/image/%E7%81%AB%E5%B1%B1%E5%8F%A3%E6%B9%96.jpg',
  'https://lijiahhui.github.io/image/%E5%B0%8F%E5%B1%8B.jpg',
  'https://lijiahhui.github.io/image/%E5%B1%82%E6%9E%97%E6%B5%B8%E6%9F%93.jpg',
]
  

function App() {
  // 与v-model的区别
  // 大概是双向数据绑定与单向数据流
  const [initData,setInitData]=useState(0) 
  const changeHandle=(item)=>setInitData(item)
  return (
    <div className="App">
      {
        picMap.map((item,ind)=>(
          <div
            className={`pic ${ind===initData?'active':''}`}
            style={{background:`url(${item})`}}
            key={ item + ind}
            onClick={function(){
              changeHandle.bind(this,ind)
              console.log('this',this);
             } 
            }
            // onClick={()=>{changeHandle(ind)
            // console.log('this',this);
            // }}//箭头函数指向定义时所在的对象,此处指向map？还是app的
          >
          </div> 
        ))
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );

}

export default App;
