import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = (props) =>{
    return<div className="maindiv_style">
    <h1>hello {props.name}
    </h1>
    <p>so how you feel baby</p>
    </div>

}
export default Demo;