import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";

import Menuber from "./component/Menuber";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Media from "./pages/Media";
import ContactUs from "./pages/ContactUs";
import LetsTalk from "./pages/LetsTalk";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Menuber />
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/media">
            <Media />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/letstalk">
            <LetsTalk />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
