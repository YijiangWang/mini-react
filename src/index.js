import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

class ClsComponent extends Component {
  render() {
    return (
      <div className="border">
        <h3>Class: {this.props.name}</h3>
      </div>
    );
  }
}

function FunComponent(props) {
  return (
    <div className="border">
      <h3>Func: {props.name}</h3>
    </div>
  );
}

function FragmentComponent(props) {
  return (
    <>
      <h3>111</h3>
      <h3>222</h3>
      <h3>{props.name}</h3>
    </>
  );
}

const jsx = (
  <div className="border">
    <h4 className="red">全栈</h4>
    <a href="https://www.baidu.com">baidu</a>
    <FunComponent  name='function'/>
    <ClsComponent name='class'/>
    <FragmentComponent />
  </div>
);
console.log('jsx: ', jsx, React.version);
ReactDOM.render(jsx, document.getElementById("root"));
