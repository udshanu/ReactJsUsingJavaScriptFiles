import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


////------------Component Communication Using Context(From Parent comonent to nested child components)--------//////////
//In typical react application data is passed from parent component to the child component via properties.
//But this can be difficult for 2nd types of proprties that are required by many components which are nested at different level with in an application.
//How do we used context in react to passed the data between components placed it deffierent nesting levels.
//Context provids a way to pass data through the components without having to pass properties from parent to child manually at every level.
//Context provids a way to share values between component without having to explicity pass property to every level of the tree.
//Context is primarally used when some data needs to be accessible by many components at different nesting levels.
//When you're defining the context variable in the child component, you have to define it as 'static contextType=employeeContext' and not 'static context=employeeContext'.
//Descendants of a Provider will re-render whenever the Provider value changes.

const employeeContext=React.createContext();

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: 101,
            Name: "Roshan",
            Location: "Kurunegala",
            Salary: 15000
        };
    }

    changeEmployeeData = () => {
        this.setState({
            Id: 102
        });
    }

    render() {
        return <div>
            <h2>Welcome to App Component..</h2>
            <p>
                <label>Employee Id: <b>{this.state.Id}</b></label>
            </p>
            <employeeContext.Provider value={this.state}>
                <Employee></Employee>
            </employeeContext.Provider>
            <p>
                <button onClick={this.changeEmployeeData}>Update</button>
            </p>
        </div>
    }
}

class Employee extends React.Component {
    //static context = employeeContext;
    static contextType = employeeContext;

    render() {
        return <div>
            <h2>Welcome to Employee Component..</h2>
            <p>
                <label>Employee Id: <b>{this.context.Id}</b></label>
            </p>
            <Salary></Salary>
        </div>
    }
}

class Salary extends React.Component {
    //static context = employeeContext;
    static contextType = employeeContext;

    render() {
        return <div>
            <h2>Welcome to Salary Component..</h2>
            <p>
                <label>Employee Id: <b>{this.context.Id}</b></label>
            </p>
        </div>
    }
}

const element = <App></App>;
ReactDOM.render(element, document.getElementById("root"));