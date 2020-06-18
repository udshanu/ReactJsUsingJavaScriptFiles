import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


////------------Understanding FORMS in React--------//////////

class EmployeeComponent extends React.Component{
    constructor(props){
        super(props);

        this.state={
            message:''
        };
    }

    onCreateEmployee=()=>{
        let empInfo={
            Id: parseInt(this.refs.id.value),
            Name: this.refs.name.value,
            Location: this.refs.location.value,
            Salary: parseInt(this.refs.salary.value)
        };
        
        //fetch('https://localhost:44336/api/Employee',
        fetch('https://localhost:44392/api/Employee',
        {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(empInfo)},
        ).then(r=>r.json()).then(result=>{
            if(result){
                this.setState({message: 'New employee is created successfully.'});
            }
        });
    }

    render(){
        return (
            <div>
                <h2>Please Enter Employee Details...</h2>
                <p>
                    <label>Id: <input type="text" ref="id"></input></label>
                </p>
                <p>
                    <label>Name: <input type="text" ref="name"></input></label>
                </p>
                <p>
                    <label>Location: <input type="text" ref="location"></input></label>
                </p>
                <p>
                    <label>Salary: <input type="text" ref="salary"></input></label>
                </p>
                <button onClick={this.onCreateEmployee}>Create</button>
                <p>{this.state.message}</p>
            </div>
        );
    }
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById("root"));
