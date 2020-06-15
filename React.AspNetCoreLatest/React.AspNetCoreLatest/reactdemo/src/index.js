import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

////------------Introduction to Class Component--------//////////
//To defined a class component in React, we have to create a class and extend it React.Component class.
//Component(both function and class) cannot modify its own properties.
//Component properties are read only.
//When we create a constructor, before we performe any operation within the constructor we must make a call to the base class constructor.
//
//When we use class components
//1. Managing state of the component.
//2. Adding life cycle methods to component.
//3. Need to write logic for event handlers.
//
//Rest of the other things we can write functional component.

class Employee extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    render() {
        return <div>
            <h1>Employee Details...</h1>
            <p>
                <label>Employee Id: <b>{this.props.Id}</b></label>
            </p>
            <p>
                <label>Employee Name: <b>{this.props.Name}</b></label>
            </p>
            <p>
                <label>Employee Location: <b>{this.props.Location}</b></label>
            </p>
            <p>
                <label>Employee Salary: <b>{this.props.Salary}</b></label>
            </p>
            <Department DptName={this.props.DptName} DptHeadName={this.props.DptHeadName} ></Department>
        </div>;
    }
}

class Department extends React.Component {
    render() {
        return <div>
            <h2>Department Details...</h2>
            <p>
                <label>Department Name: <b>{this.props.DptName}</b></label>
            </p>
            <p>
                <label>Department Head: <b>{this.props.DptHeadName}</b></label>
            </p>
        </div>;
    }
}

const element = <Employee Id="101" Name="Roshan" Location="Kurunegala" Salary="12345" DptName="UI dev" DptHeadName="Gunarathna"></Employee>;
ReactDOM.render(element, document.getElementById("root"));
