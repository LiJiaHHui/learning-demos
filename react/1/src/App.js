import './App.css';
// import { useEffect,useState  } from 'react';
const picMap=[
  'https://lijiahhui.github.io/image/%E6%9D%BE%E9%9B%80.jpg',
  'https://lijiahhui.github.io/image/%E7%81%AB%E7%84%B0%E9%B8%9F.jpg',
  'https://lijiahhui.github.io/image/%E7%81%AB%E5%B1%B1%E5%8F%A3%E6%B9%96.jpg',
  'https://lijiahhui.github.io/image/%E6%9D%BE%E9%9B%80.jpg',
  'https://lijiahhui.github.io/image/%E7%81%AB%E7%84%B0%E9%B8%9F.jpg',
]
  

function App() {
  return (
    <div className="App">
      {
        picMap.map((item,ind)=>(
          <div
            className={`pic ${index}===`}
            style={{background:`url(${item})`}}
            key={ item + ind}
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
