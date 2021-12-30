import './App.css';
import {Content,NavList,LeftMenu} from './view/page';
function App() {
  return (
    <div>
      <NavList></NavList>
      <Content>
        <div>
          title
        </div>
        <div>content</div>
      </Content>
      <LeftMenu></LeftMenu>
    </div>
  );
}

export default App;
