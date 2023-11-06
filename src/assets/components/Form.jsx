import React, { Component } from 'react'

export default class Form extends Component {
    constructor(){
        super()
        this.state = {
            name:"",
            age:""
        }
    }
    saveInfo=()=>{

    }
    changeValue=(e)=>{
        e.preventDefault()
        let name = e.target.name;
        let value = e.target.value;
        this.setState={ 
            [name]:value
        }
    }
  render() {
    console.log(this.changeValue);
    return (
      <>
        <form>
            <label htmlFor="name">Họ Và Tên:</label><br />
            <input placeholder='Nhập tên' onChange={this.changeValue}
            name='name' /><br />
            <label htmlFor="email">Tuổi:</label><br />
            <input placeholder='Nhập tuổi' onChange={this.changeValue} name='age'/><br />
            <button type="submit" onClick={this.saveInfo}>Lưu</button>
        </form>
      </>
    )
  }
}
