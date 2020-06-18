import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

////------------Interaction between React Component(Parent to Child using Properties)--------//////////
//There are 3 types of interaction,
//1.Parent to Child.
//2.Child to Parent.
//3.Between Sibilings.


class Employee extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Employee Component...</h1>
            <p>
                <label>Id : <b>{this.props.Id}</b></label>
            </p>
            <p>
                <label>Name : <b>{this.props.Name}</b></label>
            </p>
            <p>
                <label>Location : <b>{this.props.Location}</b></label>
            </p>
            <p>
                <label>Total Salary : <b>{this.props.Salary}</b></label>
            </p>
            <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}></Salary>
        </div>
    }

}

class Salary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h2>Salary Details....</h2>
            <p>
                <label>Basic Salary : <b>{this.props.BasicSalary}</b></label>
            </p>
            <p>
                <label>HRA : <b>{this.props.HRA}</b></label>
            </p>
            <p>
                <label>Special Allowance : <b>{this.props.SpecialAllowance}</b></label>
            </p>
        </div>
    }
}

const element = <Employee Id="101" Name="Roshan" Location="Kurunegala" Salary="100000" BasicSalary="75000" HRA="10000" SpecialAllowance="15000"></Employee>;
ReactDOM.render(element, document.getElementById("root"));