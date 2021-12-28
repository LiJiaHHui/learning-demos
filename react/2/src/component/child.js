import './child.css'
import React from 'react';
class child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr:[1,2,3,4] }
  }
  render() {
    const arr= this.state.arr 
    const {width,curInd} =this.props
    console.log('width',this.props,width);
    const proWidth=(wid)=>{
      console.log(wid*curInd);
      return wid*curInd+'%'
    }
    return (
      
      <div className='pos' style={ {width :width} } >
         <div className='process' style={{width:proWidth(33.33), display:'inline-block'}} >
        {/* 进度条 */}</div>
        {/* 渲染圆 */}
        <div className='display' >
        {arr.map((item,ind) =>
              (<div className={curInd>=ind?'pinkCircle':'blueCircle'} key={ind}></div>)
              )
            }
            </div>
      // </div>
     );
  }
}
 
export default child;