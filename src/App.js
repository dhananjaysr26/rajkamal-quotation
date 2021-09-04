import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import QEditor from "./components/QuotationEditor";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/quotation-editor" component={QEditor} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
