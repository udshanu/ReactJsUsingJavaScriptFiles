import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


////------------How to call REST API from React App--------//////////
//Mounting in React - Fetches the list of employees From rest api Whenever Employee Component render to the DOM.

class EmployeeComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { employees: [] };
    }

    componentDidMount() {
        fetch("https://localhost:44336/api/Employee").then(res => res.json()).then(
            result => {
                this.setState({ employees: result });
                console.log(result);
            }
        )
    }

    render() {
        return (<div>
            <h2>Employee Details...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.employees.map(emp => (
                        <tr key={emp.Id}>
                            <td>{emp.Id}</td>
                            <td>{emp.Name}</td>
                            <td>{emp.Location}</td>
                            <td>{emp.Salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>);
    }
}

const element = <EmployeeComponent></EmployeeComponent>
ReactDOM.render(element, document.getElementById("root"));