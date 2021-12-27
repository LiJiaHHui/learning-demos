import {Component,useState} from 'react';
import '../App.css';
import Children from '../component/child'
class father extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      curInd:0
     }
  }
  //  方法定义？调用？
  //  [curInd,setCurInd]=useState(0)
  addBtn(){
    if(this.state.curInd<5)
    this.setState({curInd:++this.state.curInd})
    console.log('this.cur',this.state.curInd);
  }
  subBtn(){
    if(this.state.curInd>0)
    this.setState({curInd:--this.state.curInd})
    console.log('this.cur',this.state.curInd);
  }
  render() { 
    return ( 
    <div>
      
      <Children > </Children>
      <button className={`${this.state.curInd===0?'gray':'blue'}`} disabled={`${this.state.curInd===0?'disabled':''}`} onClick={this.subBtn.bind(this)}>上一步</button>
      <button className={`${this.state.curInd===5?'gray':'blue'}`} disabled={`${this.state.curInd===5?'disabled':''}`} onClick={this.addBtn.bind(this)}>下一步</button>
    </div>

     );
  }
}
 
export default father;