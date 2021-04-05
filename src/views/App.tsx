import React from 'react'
import '../styles/global.scss'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import { NoLayout } from '../layouts/NoLayout/NoLayout'
import { Onboarding } from './Onboarding/Onboarding'
import { AuthLayout } from '../layouts/AuthLayout/AuthLayout'
import { Start } from './Start/Start'
import { Register } from './Register/Register'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NoLayout>
              <Onboarding />
            </NoLayout>
          </Route>
          <Route path="/login">
            <AuthLayout>login</AuthLayout>
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
