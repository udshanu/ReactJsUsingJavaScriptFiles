import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


////------------Understanding FORMS in React--------//////////
//In React state of this input elements is typically kept in state property of the component, and only update it with setState method.
//Input Form element controll by react in this fasion is called as "Controlled Inputs" or "Controlled Components".
//The alternative is "Uncontrolled Inputs" or "Uncontrolled Components" where form data is handled by the DOM itself.
//We will use "ref" to get value of this input and performe operation of this data.
//Uncontrolled inputs are simplest way to implement the form inputs but they are not powerful enough to build real world applictions.
//We can get all property values by using "Spred Oparator" 
//React do not provide some features by default.(validations, keep track of visited fields, handle form submition, etc..)

//We use "Formik" labrary for build powerfull applications in React.
//Formik also build on the same principles of control components and managing states.

//What is "Formik"?
//Small group of React components and functions used for building forms in React and React Native.
//This helps 3 most important activities.
//1. Get values from form
//2. Handling validation of form data.
//3. Handiling form submition.


class EmployeeComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            employee:{
                Id:'',
                Name:'',
                Location:'',
                Salary:''
            }
        };
    }

    changeHandler=e=>{
        const name = e.target.name;
        const value = e.target.value;

        this.setState({employee:{
            ...this.state.employee, [name]:value //this is the spred oparator.
        }});
    }

    onCreateEmployee=()=>{
        console.log(this.state.employee);
    }

    render(){
        return(
            <div>
                <h2>New Employee Form...</h2>
                <p>
                    <label>
                         {/* Name property should equal to state employee object's names. */}
                        Employee ID: <input type="Text" name="Id" value={this.state.employee.Id} onChange={this.changeHandler}></input> 
                    </label>
                </p>
                <p>
                    <label>
                        Employee Name: <input type="Text" name="Name" value={this.state.employee.Name} onChange={this.changeHandler}></input>
                    </label>
                </p>
                <p>
                    <label>
                        Employee Location: <input type="Text" name="Location" value={this.state.employee.Location} onChange={this.changeHandler}></input>
                    </label>
                </p>
                <p>
                    <label>
                        Employee Salary: <input type="Text" name="Salary" value={this.state.employee.Salary} onChange={this.changeHandler}></input>
                    </label>
                </p>
                <button onClick={this.onCreateEmployee}>Create</button>
            </div>
        );
    }
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById("root"));
