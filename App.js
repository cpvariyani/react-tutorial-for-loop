import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee/Employee';

// function App() {
//   return <div className="App">This is react example.</div>;
// }

class App extends Component {
  state = {
    employees: [
      {
        Name: 'CP Variyani',
        Skills: 'React, C# ,Angular'
      },
      {
        Name: 'Vibhu',
        Skills: 'React, Html, CSS'
      },
      {
        Name: 'Suyash',
        Skills: 'React, Html, CSS'
      }
    ],

    heading: 'This is react example',
    showOrHideEmp: true
  };

  UpdateEmployeeDataHandler = updatedNewName => {
    console.log('it is clicked');

    this.setState({
      employees: [
        {
          Name: updatedNewName,
          Skills: 'React'
        },
        {
          Name: updatedNewName,
          Skills: 'React'
        }
      ]
    });
  };

  deleteEmployeeHandler = index => {
    const emps = this.state.employees;
    emps.splice(index, 1);
    this.setState({ employees: emps });
  };

  updateMynameHandler = event => {
    console.log('it is clicked');

    this.setState({
      employees: [
        {
          Name: event.target.value,
          Skills: 'React'
        },
        {
          Name: 'Vibhu',
          Skills: 'React'
        }
      ]
    });
  };

  showHideEmpHandler = () => {
    this.setState({ showOrHideEmp: !this.state.showOrHideEmp });
  };

  render() {
    let employees = null;

    if (this.state.showOrHideEmp) {
      employees = (
        <div>
          {this.state.employees.map((emp, index) => {
            return (
              <Employee
                deleteEmpHandler={this.deleteEmployeeHandler.bind(this, index)}
                Name={emp.Name}
                Skills={emp.Skills}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>List of Employees</h1>

        <button onClick={this.showHideEmpHandler}>
          Show/Hide Employee Data
        </button>
        <span>{this.state.heading}</span>

        {employees}
      </div>
    );
  }
}

export default App;
