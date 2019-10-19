import React from 'react';
import {Button} from 'antd';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.getDOM = this.getDOM.bind(this);
    }
  
    getDOM(element) {
      this.div = element
    }
  
    render() {
      return (
        <div>
          <Button getDOM={this.getDOM} />
        </div>
      );
    }
  }
  //Button.js
  export default (props) => (
    <div>
      <button ref={props.getDOM} onClick={props.onClick}>this is a button</button>
    </div>
  )