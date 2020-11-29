import logo from "./logo.svg";
import "./App.css";
import home from "./Home/home";
import prodgrid from "./products/prodgrid";

function App() {
  return <div className="App">{prodgrid()}</div>;
}

export default App;
