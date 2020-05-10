import React from "react";
import Landing from "./components/HeaderComponents/Landing";
import Projects from "./components/ProjectsComponents/Projects";
import Contact from "./components/ContactsComponents/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header" id="landing">
        <Landing />
      </header>
      <section className="processes-section" id="processes">
          <Projects />
      </section>
      <section className="contacts-section" id="contacts">
          <Contact />
      </section>
    </div>
  );
}

export default App;
