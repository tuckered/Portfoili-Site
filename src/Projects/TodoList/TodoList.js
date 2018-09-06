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
      console.log(event.target.value)
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

  render() {
    const { textInput } = this.state
    const listOutput = this.state.list.map((item) =>
      <li className="uncompleted" onClick={this.toggleClass}> {item}
      </li>
    )
    return <div className="todo-page-container">
      <h1 className="todo-h1">TO DO LIST</h1>
      <form className="search-container" onSubmit={this.handleSubmit} action="">
        <input onChange={this.handleChange} type="text" value={textInput}/>
      </form>
      <ul className="todo-list-container">
        {listOutput}
      </ul>
    </div>
  }
}
