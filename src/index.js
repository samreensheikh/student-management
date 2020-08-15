import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StudentDetail from "./page/student_details/student_detail";
import StudentAddForm from "./page/student_add/index";
import 'antd/dist/antd.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={StudentDetail} />
          <Route exact path="/add" component={StudentAddForm} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
