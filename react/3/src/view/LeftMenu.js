import {useState} from 'react';
const LeftMenu=(props)=> {
  const clickHandle=()=>{
    props.onClick&&props.changVal()
  }
    return ( 
     <div>
    {<div onClick={clickHandle.bind()}>
      </div>}
     </div> );
}
 
export default LeftMenu;