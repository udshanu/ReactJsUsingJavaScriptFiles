import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

////------------Introduction to State in React Class Component--------//////////
//Change there output overtime in response to variouse user actions.
//State similar to props.
//This is private.
//State fully control by the component class.
//State contains data specific to a given component that may change over time.
//State is user defined javascript object.
//"SetState" method = managing component state.
//"SetState" method tells to react this component and its children should be re-render with the most update state.


class CountCharacters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            counter: 10
        };
    }

    onMessageChange(text) {
        this.setState({
            message: 'Message has ' + text.length + ' number of characters.'
        });
    }

    render() {
        return <div>
            <h2> Welcome to count characters component...</h2>
            <p>
                <label>Enter message: <input type="text" onChange={e => this.onMessageChange(e.target.value)}></input> </label>

            </p>
            <p>
                <label>{this.state.message}</label>
            </p>
            <p>
                <label>{this.state.counter}</label>
            </p>
        </div>

    }
}

const element = <CountCharacters></CountCharacters>
ReactDOM.render(element, document.getElementById("root"));


class Employee extends React.Component {
    state = { counter: 0 };
    counter = 0;
    addEmployee = () => {
        this.setState({ counter: this.state.counter + 1 });
        //this.counter = this.counter + 1;
        //alert("Add a new Employee.");
        //alert('Add Employee button is clicked ' + this.counter +' times.');
    }
    render() {
        return <div>
            <h2>Welcome to Employee Component...</h2>
            <p>
                <button onClick={this.addEmployee}>Add Employee</button>
            </p>
            <p>
                <label>Add Employee button is clicked <b>{this.state.counter}</b> times.</label>
            </p>
        </div>
    }
}

//const element = <Employee></Employee>
//ReactDOM.render(element, document.getElementById("root"));


