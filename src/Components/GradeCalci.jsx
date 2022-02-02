import React, { Component } from 'react'
import '../App.css';


export default class GradeCalci extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            num3: '',
            num4: '',
            num5: '',
            num6: '',
            total: ''
        }
    }
    handleSubmit(e) {
        const { num1, num2, num3, num4, num5, num6 } = this.state
        e.preventDefault()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    calculate = (e) => {
        const total = parseInt(this.state.num1) + parseInt(this.state.num2) + parseInt(this.state.num3) +
            parseInt(this.state.num4) + parseInt(this.state.num5) + parseInt(this.state.num6);
        const percentage = (total / 600) * 100;
        let grades = "";
        let remarks = "";
        if (percentage <= 100 && percentage >= 80) {
            grades = "A";
        } else if (percentage <= 79 && percentage >= 60) {
            grades = "B";
        } else if (percentage <= 59 && percentage >= 40) {
            grades = "C";
        } else {
            grades = "F";
        }
        if (grades < 35) {
            remarks = "FAIL"
        } else {
            remarks = "PASS"
        }
        this.setState({
            total, percentage, grades, remarks
        })
        e.preventDefault();
    }
    render() {

        return (
            <>
                <div className='container'>
                    <div className='label'>
                        <h2>Grade Calculater System</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='formclass'>
                            <label htmlFor='English'>English</label>
                            <input
                                name='num1'
                                placeholder='Marks out of 100'
                                className='inputclass'
                                value={this.state.num1}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='formclass'>
                            <label htmlFor='Hindi'>Hindi</label>
                            <input
                                name='num2'
                                placeholder='Marks out of 100'
                                className='inputclass'
                                value={this.state.num2}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='formclass'>
                            <label htmlFor='Maths'>Mathematics</label>
                            <input
                                name='num3'
                                placeholder='Marks out of 100'
                                className='inputclass'
                                value={this.state.num3}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='formclass'>
                            <label htmlFor='Computer'>Computer</label>
                            <input
                                name='num4'
                                placeholder='Marks out of 100'
                                className='inputclass'
                                value={this.state.num4}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='formclass'>
                            <label htmlFor='Sanskrit'>Sanskrit</label>
                            <input
                                name='num5'
                                placeholder='Marks out of 100'
                                className='inputclass'
                                value={this.state.num5}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='formclass'>
                            <label htmlFor='Science'>Science</label>
                            <input
                                name='num6'
                                placeholder='Marks out of 100'
                                className='inputclass'
                                value={this.state.num6}
                                onChange={this.handleChange}
                            />
                        </div>
                        <button className='calculate' onClick={this.calculate}>Calculate</button>
                    </form>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <td>Total Marks</td>
                        <td>600 </td>
                    </tr>
                    <tr>
                        <td>Obtained Marks</td>
                        <td>{this.state.total}</td>
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
        )
    }
}
