import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


////------------Display Employee List in React--------//////////

function Employee(props){
    return <div style={{border: "3px solid red"}}>
        <p>
            <label>Employee Id: <b>{props.data.Id}</b></label>
        </p>
        <p>
            <label>Name: <b>{props.data.Name}</b></label>
        </p>
        <p>
            <label>Location: <b>{props.data.Location}</b></label>
        </p>
        <p>
            <label>Salary: <b>{props.data.Salary}</b></label>
        </p>
    </div>
}

function DisplayEmployees(props){

    const empList = props.employeeList;
    const listEmployees = empList.map((emp)=> <Employee key={emp.Id} data={emp}></Employee>);

    return <div>{listEmployees}</div>

}

const employees = [
    { Id: 101, Name: "Roshan", Location: "Kurunegala", Salary: 15000 },
    { Id: 102, Name: "Manoj", Location: "Thanthirigama", Salary: 25000 },
    { Id: 103, Name: "Gunarathna", Location: "Makulwewa", Salary: 35000 }
];

const element = <DisplayEmployees employeeList={employees}></DisplayEmployees>;
ReactDOM.render(element, document.getElementById("root"));