import "./App.css";
import Header from "./Components/Header";
import Connect from "./Components/Connect";
import About from "./Components/About";
import Developer from "./Components/Developer";
import Techs from "./Components/Techs";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Connect />
      <About />
      <Developer />
      <Techs />
      <Experience />
    </div>
  );
}

export default App;
