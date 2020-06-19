import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik, Formik } from 'formik';
import './index.css';


////------------Create FORMS Using Formik library in React--------//////////
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

const EmployeeComponent = () => {
    const formik = useFormik({
        initialValues: {
            Id: '',
            Name: '',
            Location: '',
            Salary: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    });

    return (
        <div>
            <h2>New Employee Form..</h2>
            <form onSubmit={formik.handleSubmit}>
                <p>
                    <label htmlFor="Id">Employee Id:</label>
                    <input type="text" name="Id" id="Id" value={formik.values.Id} onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="Name">Employee Name:</label>
                    <input type="text" name="Name" id="Name" value={formik.values.Name} onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="Location">Employee Location:</label>
                    <input type="text" name="Location" id="Location" value={formik.values.Location} onChange={formik.handleChange}></input>
                </p>
                <p>
                    <label htmlFor="Salary">Employee Salary:</label>
                    <input type="text" name="Salary" id="Salary" value={formik.values.Salary} onChange={formik.handleChange}></input>
                </p>
                <button type="submit">Create</button>
            </form>
        </div>
    );
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById("root"));
