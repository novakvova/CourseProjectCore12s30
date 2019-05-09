import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';
import { SET_CURRENT_USER } from '../actions/types';

class Home extends Component {
  state = { 
    name: 'semen'
  }
  onClickButton = (e) => {
    e.preventDefault();
    const {name}=this.state;
    this.props.dispatch(
      {
        type: SET_CURRENT_USER,
        user: { name }
      }
    );
    console.log('On change state');
  }
  onChangeHandle = (e) => {
    this.setState({name: e.target.value});
  }
  render() { 
    console.log('----Home page props-----', this.props);
    const { name }=this.state; 
    return ( 
      <div>
        <h1>Home page</h1>
        <Input value={name} onChange={this.onChangeHandle}/>
        <Button onClick={this.onClickButton}>Hello</Button>
      </div>
     );
  }
}
 
export default connect()(Home);



//export default connect()(Home);
