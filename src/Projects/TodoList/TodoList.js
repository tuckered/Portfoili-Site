import React from 'react'
import './todoList.css'

export default class TodoList extends React.Component {
  
  constructor() {
    super()
    // this.handeClick = this.handleClick.bind(this)
    this.state = {
      list: ["Do the washing up", "Get a Job", "Find the Meaning of Life"],
      textInput: ''
    }
  }
  
  handleChange = (event) => {
    event.persist()
    this.setState(() => {
      return { textInput: event.target.value }
    })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState((prevState) => {
      return {list: [...prevState.list, this.state.textInput], textInput: '' } 
    })
  }

  toggleClass = (event) => {
    if (event.target.className === "uncompleted") {
      event.target.className = "completed"
      console.log('completed')
    } else event.target.className = "uncompleted"
    console.log('uncompleted')
  }

  deleteItem = (event) => {
    if (event.target.className === "close") {
      let div = this.parentElement
      div.style.display = "none"
    }
  }

  render() {
    const { textInput } = this.state
    const listOutput = this.state.list.map((item) =>
      <div className="list-item">
        <li className="uncompleted" onClick={this.toggleClass}>{item}<span className="close" onClick={this.deleteItem}>x</span></li>
        
      </div>
    )
    return <div className="page-container">
      {/* <div className="todo-container"> */}
        <h1 className="todo-h1">To-Do List...</h1>
        <form className="search-container" onSubmit={this.handleSubmit} action="">
          <input className="input-box" onChange={this.handleChange} type="text" placeholder="...buy bananas"value={textInput}/>
        </form>
        <ul className="todo-list-container">
          {listOutput}
        </ul>
      </div>
    // </div>
  }
}
