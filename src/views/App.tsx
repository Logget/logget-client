import React from "react";
import "../assets/styles/global.scss";
import { Route, BrowserRouter } from "react-router-dom";
import { NoLayout } from "../layouts/NoLayout/NoLayout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/">
          <NoLayout>hello</NoLayout>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
