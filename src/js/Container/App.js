import React from 'react'
import {HeaderRow, } from '../Components/'
import {Slogan, } from '../Components/Functional'

class App extends React.Component {
  render() {
    return (
      <div >
        <HeaderRow />
        <div className='app-body'>

          { Slogan() }
        </div>
      </div>
    )
  }
}

export default App
