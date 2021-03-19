import React from "react";
import "../styles/global.scss";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { NoLayout } from "../layouts/NoLayout/NoLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <NoLayout>hello</NoLayout>
          </Route>
          <Route path="/login">
            <NoLayout>login</NoLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
