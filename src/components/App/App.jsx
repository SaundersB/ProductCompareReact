import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '..'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default App
