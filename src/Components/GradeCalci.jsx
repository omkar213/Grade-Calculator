import React, { Component } from 'react'
import '../App.css';


export default class GradeCalci extends Component {
    constructor(){
        super();
        this.state ={
            num1:'',
            num2:'',
            num3:'',
            num4:'',
            num5:'',
            num6:'',
            total:''
        }
    }

    handlenum1 = (e) =>{
        this.setState({
            num1:e.target.value
        })
    }
    handlenum2 = (e) =>{
        this.setState({
            num2:e.target.value
        })
    }
    handlenum3 = (e) =>{
        this.setState({
            num3:e.target.value
        })
    }
    handlenum4 = (e) =>{
        this.setState({
            num4:e.target.value
        })
    }
    handlenum5 = (e) =>{
        this.setState({
            num5:e.target.value
        })
    }
    handlenum6 = (e) =>{
        this.setState({
            num6:e.target.value
        })
    }
    calculate = (e) =>{
       this.setState({ 
        total : parseInt(this.state.num1) + parseInt(this.state.num2) + parseInt(this.state.num3) + 
            parseInt(this.state.num4) + parseInt(this.state.num5) + parseInt(this.state.num6) ,
        percentage : (total/600) * 100
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

              <div className='formclass'>
                   <label>English</label>
                   <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num1} onChange={this.handlenum1}/>
              </div>
                
              <div className='formclass'>
                   <label>Hindi</label>
                   <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num2} onChange={this.handlenum2}/>
              </div>
                
              <div className='formclass'>
                   <label>Maths</label>
                   <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num3} onChange={this.handlenum3}/>
              </div>

              <div className='formclass'>
                   <label>Computer</label>
                   <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num4} onChange={this.handlenum4}/>
              </div>

              <div className='formclass'>
                   <label>Sanskrit</label>
                   <input type="text" className='inputclass' placeholder='marks out of 100' value={this.state.num5} onChange={this.handlenum5}/>
              </div>

              <div className='formclass'>
                   <label>Science</label>
                   <input type="text" className='inputclass' placeholder='marks' value={this.state.num6} onChange={this.handlenum6}/>
              </div>
              <button className='calculate' onClick={this.calculate}>Calculate</button>

            <div className='Result'>
                <label>Total Marks: <span>600</span> </label><br></br><br></br>
                <label>Obtained Marks: <span>{this.state.total}</span></label><br></br><br></br>
                <label>Percentage: <span></span> </label><br></br><br></br>
                <label>Grade: <span></span> </label><br></br><br></br>
                <label>Remarks: <span></span> </label><br></br><br></br>
            </div>    
            
               
        </div>
            </>
        )
    }
}
