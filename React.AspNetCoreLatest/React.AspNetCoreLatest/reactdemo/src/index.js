import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


////------------Component Communication Using Context(From Child comonents to Parent component)--------//////////
//How do we update context from nested component and how do we communicate it back to the parent component.

const employeeContext = React.createContext({
    data:'',
    changeEmployeeInfo:()=>{}
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                Id: 101,
                Name: "Roshan",
                Location: "Kurunegala",
                Salary: 15000
            },
            changeEmployeeInfo: this.updateEmployeeDetails
        };
    }

    updateEmployeeDetails = () => {
        this.setState({ data: { Id: 102}});
    }

    render() {
        return <div>
            <h2>Welcome to App Component..</h2>
            <p>
                <label>Employee Id: <b>{this.state.data.Id}</b></label>
            </p>
            <employeeContext.Provider value={this.state}>
                <Employee></Employee>
            </employeeContext.Provider>
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
                <label>Employee Id: <b>{this.context.data.Id}</b></label>
            </p>
            <p>
                <button onClick={this.context.changeEmployeeInfo}>Update</button>
            </p>
        </div>
    }
}

const element = <App></App>;
ReactDOM.render(element, document.getElementById("root"));