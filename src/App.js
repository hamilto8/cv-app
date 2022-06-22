import React from "react";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="App">
      <h1>CV App</h1>
      <p>Welcome to the CV App. Please enter your information below</p>
      <GeneralInformation />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
