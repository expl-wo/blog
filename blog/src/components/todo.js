import {Component} from 'react'

export default class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
            fruitList : ["apple","banana"],
            inputValue:''
        }
    }

    handleClick(){
        this.setState({
            fruitList : [...this.state.fruitList , this.state.inputValue]
        })
    }
    onInputChange(e){
        this.setState({
            inputValue : e.target.value
        })
        console.log(e.target.value,this.state.inputValue);
    }
    handleDelete(idx){
        // alert(idx);
        let list = this.state.fruitList;
        list.splice(idx,1);
        this.setState({
            fruitList : list
        })
    }

    
    render(){
        return (
            <div className="todo">
                <input value={this.inputValue} onChange={this.onInputChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>add</button>
                <ul>
                    {
                        this.state.fruitList.map((item,index)=>{
                            return <li key={index} onClick={this.handleDelete.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    
}