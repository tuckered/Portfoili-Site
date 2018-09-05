import React from 'react'
import '../../Pages/TodoList/todoList.css'

export default class TodoList extends React.Component {
  
  constructor() {
    super()
    // this.handeClick = this.handleClick.bind(this)
    this.state = {
      list: ["Do the washing up", "get a job", "find the meaning of life"],
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

  // removeItem = (event) => {
  //   // event.target.style.textDecoration = 'line-through'
  // }

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
    return <div className="todo-page-Container">
      <ul className="todo-list-Container">
        {listOutput}
      </ul>
      <form onSubmit={this.handleSubmit} action="">
        <input onChange={this.handleChange} type="text" value={textInput}/>
      </form>
    </div>
  }
}


// renderList() {
  //   const listOutput = this.state.list.map((item) =>
  //     <li>{item}</li>
  //     // console.log(item + ":item")
  //   )
  // }