import './child.css'
import React from 'react';
class child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arr:[1,2,3,4] }
  }
  render() {
    let arr= this.state.arr 
    return ( 
     
      <div>
{arr.map((item) => {
        <div className={'circle'} >
          
        </div>
      })}
      </div>
     );
  }
}
 
export default child;