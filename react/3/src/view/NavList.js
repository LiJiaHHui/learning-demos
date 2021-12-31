import {Component} from 'react';
class NavList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        {
          this.props.NavData.map((item,ind)=>(
            <li dangerouslySetInnerHTML={{__html:item}} key={ind}></li>
          ))
        }
      </div>
      );
  }
}
 
export default NavList;