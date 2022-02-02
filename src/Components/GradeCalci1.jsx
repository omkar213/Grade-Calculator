export default class GradeCalci extends Component {
    constructor() {
        super();
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

    handlenum1 = (e) => {
        this.setState({
            num1: e.target.value
        })
    }
    handlenum2 = (e) => {
        this.setState({
            num2: e.target.value
        })
    }
    handlenum3 = (e) => {
        this.setState({
            num3: e.target.value
        })
    }
    handlenum4 = (e) => {
        this.setState({
            num4: e.target.value
        })
    }
    handlenum5 = (e) => {
        this.setState({
            num5: e.target.value
        })
    }
    handlenum6 = (e) => {
        this.setState({
            num6: e.target.value
        })
    }
    calculate = (e) => {
        const total = parseInt(this.state.num1) + parseInt(this.state.num2) + parseInt(this.state.num3) +
            parseInt(this.state.num4) + parseInt(this.state.num5) + parseInt(this.state.num6);
        const Percentage = (total / 600) * 100;
        let grades = "";
        let remarks = "";
        if (Percentage <= 100 && Percentage >= 80) {
            grades = "A";
        } else if (Percentage <= 79 && Percentage >= 60) {
            grades = "B";
        } else if (Percentage <= 59 && Percentage >= 40) {
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
            total, Percentage, grades, remarks
        })
        e.preventDefault();
    }

    SUBJECT = [{label: "English",}]
    render() {

        return (
            <>
                <div className='container'>
                    <div className='label'>
                        <h2>Grade Calculater System</h2>
                    </div>

                    <div className='formclass'>
                        <label>English</label>
                        <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num1} onChange={this.handlenum1} />
                    </div>

                    <div className='formclass'>
                        <label>Hindi</label>
                        <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num2} onChange={this.handlenum2} />
                    </div>

                    <div className='formclass'>
                        <label>Maths</label>
                        <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num3} onChange={this.handlenum3} />
                    </div>

                    <div className='formclass'>
                        <label>Computer</label>
                        <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num4} onChange={this.handlenum4} />
                    </div>

                    <div className='formclass'>
                        <label>Sanskrit</label>
                        <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num5} onChange={this.handlenum5} />
                    </div>

                    <div className='formclass'>
                        <label>Science</label>
                        <input type="text" className='inputclass' placeholder='marks' value={this.state.num6} onChange={this.handlenum6} />
                    </div>
                    <button className='calculate' onClick={this.calculate}>Calculate</button>

                    <table>
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
                            <td>{this.state.Percentage}</td>
                        </tr>
                        <tr>
                            <td>Grade</td>
                            <td>{this.state.grades}</td>
                        </tr>
                        <tr>
                            <td>Remarks</td>
                            <td>{this.state.remarks}</td>
                        </tr>
                    </table>
                </div>
            </>
        )
    }
}