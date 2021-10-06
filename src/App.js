import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./components/Main";
import Signin from "./RoutAndLogin/Signin";
import ProtectedRoute from "./RoutAndLogin/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/signin" component={Signin} />
        <ProtectedRoute exact path="/" component={Main} />
      </BrowserRouter>
    </div>
  );
}

export default App;
