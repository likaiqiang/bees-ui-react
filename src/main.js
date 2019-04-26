import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import {UiButton} from './components/index'

class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <UiButton>demo</UiButton>
    )
  }
}

ReactDOM.render(
  <App></App>,
  document.getElementById('app')
)