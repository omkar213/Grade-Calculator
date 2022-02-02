import React, { Component } from "react";
import "../App.css";

export default class GradeCalci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      english: 0,
      hindi: 0,
      maths: 0,
      computer: 0,
      sanskrit: 0,
      science: 0,
      marksObtained: 0,
    };
    this.SUBJECTS = [
      { id: 1, label: "English", key: "english" },
      { id: 2, label: "Hindi", key: "hindi" },
      { id: 3, label: "Maths", key: "maths" },
      { id: 4, label: "Computer", key: "computer" },
      { id: 5, label: "Sanskrit", key: "sanskrit" },
      { id: 6, label: "Science", key: "science" },
    ];
  }

  updateTotal = () => {
    let marksObtained = 0;
    this.SUBJECTS.forEach((subject) => {
      const key = subject.key;
      const marks = +this.state[key];
      marksObtained = marksObtained + marks;
    });
    this.setState({ marksObtained }, this.calculate);
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = +e.target.value;

    this.setState(
      {
        [name]: value,
      },
      this.updateTotal,
    );
  };

  /**
   * @param {Number} percentage
   * @returns {Object} {grades, marks}
   */
  getGradeAndRemarks = (percentage) => {
    let grades = "F";
    let remarks = "PASS";
    if (percentage <= 100 && percentage >= 80) {
      grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
      grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
      grades = "C";
    }
    if (percentage < 35) remarks = "FAIL";

    return { grades, remarks };
  };

  calculate = (e) => {
    // let marksObtained = 0;
    // this.SUBJECTS.forEach((subject) => {
    //   const key = subject.key;
    //   const marks = +this.state[key];
    //   marksObtained = marksObtained + marks;
    // });
    // console.log(marksObtained);
    const { marksObtained } = this.state;
    const percentage = ((marksObtained / 600) * 100).toFixed(2);
    let { remarks, grades } = this.getGradeAndRemarks(percentage);

    this.setState({
      marksObtained,
      percentage,
      grades,
      remarks,
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="label">
            <h2>Grade Calculater System</h2>
          </div>
          <div className="form">
            {this.SUBJECTS.map((subject) => {
              return (
                <div className="formclass" key={subject.id}>
                  <label htmlFor={subject.label}>{subject.label}</label>
                  <input
                    id={subject.label}
                    name={subject.key}
                    placeholder="Marks out of 100"
                    className="inputclass"
                    // value={this.state.num1}
                    onChange={this.handleChange}
                  />
                </div>
              );
            })}
            <button className="calculate" onClick={this.calculate}>
              Calculate
            </button>
          </div>
        </div>
        <h2>Marked Obtained: {this.state.marksObtained}</h2>
        <table>
          <tbody>
            <tr>
              <td>Total Marks</td>
              <td>600 </td>
            </tr>
            <tr>
              <td>Obtained Marks</td>
              <td>{this.state.marksObtained}</td>
            </tr>
            <tr>
              <td>Percentage</td>
              <td>{this.state.percentage}</td>
            </tr>
            <tr>
              <td>Grade</td>
              <td>{this.state.grades}</td>
            </tr>
            <tr>
              <td>Remarks</td>
              <td>{this.state.remarks}</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
