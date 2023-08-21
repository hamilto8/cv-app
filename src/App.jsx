import { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalInfo from "./EducationalInfo";
import WorkInfo from "./WorkInfo";
import Header from "./Header";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="app-body">
        <h1>CV App</h1>
        <GeneralInfo />
        <EducationalInfo />
        <WorkInfo />
      </div>
      <Footer />
    </>
  );
}

export default App;
