import logo from "./logo.svg";
import "./App.css";
import home from "./Home/home";
import ProdGrid from "./products/prodgrid";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import header from "./header";
import LoginForm from "./ResLog/LoginForm";
import SignUpForm from "./ResLog/SignUpForm";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/auth";
import AddProduct from "./AddProduct/addProduct";

function App() {
  const { state, loadUser } = useContext(AuthContext);
  useEffect(() => {
    loadUser();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {header()}
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/collection" component={ProdGrid} />
          <Route path="/addproducts" component={AddProduct} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
