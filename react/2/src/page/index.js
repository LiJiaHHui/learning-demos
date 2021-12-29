import {Component} from 'react';
// useState
import '../App.css';
import Children from '../component/child'
class Father extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      curInd:0
     }
  }
  //  方法定义？调用？
  //  [curInd,setCurInd]=useState(0)
  addBtn(){
    if(this.state.curInd<5){
      // let curInd=this.state.curInd
    this.setState({curInd:++this.state.curInd})}
    console.log('this.cur',this.state.curInd);
  }
  subBtn(){
    if(this.state.curInd>0){
      let curInd=this.state.curInd
    this.setState({curInd:--this.state.curInd})}
    console.log('this.cur',this.state.curInd);
  }
  render() { 
    return ( 
    <div>
      <Children width="400px" curInd={this.state.curInd}> </Children>
      <button className={`${this.state.curInd===0?'gray':'blue'}`} disabled={`${this.state.curInd===0?'disabled':''}`} onClick={this.subBtn.bind(this)}>上一步</button>
      <button className={`${this.state.curInd===5?'gray':'blue'}`} disabled={`${this.state.curInd===5?'disabled':''}`} onClick={this.addBtn.bind(this)}>下一步</button>
    </div>

     );
  }
}
 
export default Father;