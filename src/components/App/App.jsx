import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from '..'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App
