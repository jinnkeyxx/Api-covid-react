import React from 'react'
import Result from './Result'
import Button from './Button'
import Input from './Input'
class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count : 1,
            background : '#fff',
            task : [],
            n1 : 0,
            n2 : 0,
            total : 0,
        }

        // this.changerCounter = this.changerCounter.bind(this)
    }
    getRandomColor =() =>  {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    changerCounter = () => {
        this.setState({count : this.state.count + 1 })
    }
    changerColor = () => {
        this.setState({background : this.getRandomColor()})
    }
    addtask = () => {
        var task = document.querySelector('input').value

        this.setState({task : [...this.state.task , task]})
    }
    changeInput = (e) => {
        let value = e.target.value
        let name = e.target.name
        if(name === "number1"){
            this.setState({n1 : value})
        }
        else if(name === "number2"){
            this.setState({n2 : value})
        }
    }
    sumNumber = () => {
        let number1 = this.state.n1
        let number2 = this.state.n2
        if(!isNaN(number1) && !isNaN(number2)){
            number1 = parseFloat(number1)
            number2 = parseFloat(number2)
            this.setState({total : number1 + number2})
        }
        else {
            this.setState({total : 'Khong co ket qua'})
            alert(this.state.total)
        }

    }
    render = () => {
        let body = document.querySelector('body')
        body.style.background = this.state.background
        const task = this.state.task.map((item) =>
            <li>{item}</li>
        )
        return(
            <div className="container">
                <div className="text-center">
                    <ul>{task}</ul>
                    <Input change={this.changeInput} type="text" name="number1"/>
                    <Input change={this.changeInput} type="text" name="number2"/>

                    <Button click={this.sumNumber} type="button">=</Button>

                    <Result result={this.state.total}/>
                </div>

            </div>
        )
    }
}
export default Counter