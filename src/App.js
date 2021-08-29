import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from "react";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  let showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white";
      showalert("Dark mode is enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("Light mode is enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          Navtitle="TextUtils"
          abouttext="About"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
       

        <Switch>
          <Route path="/about">
            <About togglemode={togglemode} mode={mode}/>
          </Route>
          <Route path="/">
            <div className="container">
              <Textform
                showalert={showalert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </div>
          </Route>
        </Switch>

        <div />
      </Router>
    </>
  );
}

export default App;
