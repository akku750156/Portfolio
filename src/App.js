import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Techs from "./Components/Techs";
import Connect from "./Components/Connect";

// import Connect from "./Components/Connect";
// import About from "./Components/About";
// import Developer from "./Components/Developer";
// import Techs from "./Components/Techs";
// import Experience from "./Components/Experience";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Experience" component={Experience}></Route>
            <Route exact path="/Techs" component={Techs}></Route>
          </Switch>
        </Router>
        {/* <Developer /> */}
        {/* <About /> */}
        {/* <Techs /> */}
        {/* <Experience /> */}
        <Connect />
      </div>
    </>
  );
}

export default App;
