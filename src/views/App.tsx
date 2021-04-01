import React from 'react'
import '../styles/global.scss'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { NoLayout } from '../layouts/NoLayout/NoLayout'
import { Home } from './Home/Home'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NoLayout>
              <Home />
            </NoLayout>
          </Route>
          <Route path="/login">
            <AuthLayout>login</AuthLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
