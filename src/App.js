import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
