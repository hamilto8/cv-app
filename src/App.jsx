import { useEffect, useState } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationalInfo from "./EducationalInfo";
import WorkInfo from "./WorkInfo";
import Header from "./Header";
import Footer from "./Footer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumePDF from "./ResumePDF";

import "./styles/App.css";

function App() {
  const [generalInfo, setGeneralInfo] = useState({});
  const [generalInfoSubmitted, setGeneralInfoSubmitted] = useState(false);
  const [educationalInfo, setEducationalInfo] = useState({});
  const [educationInfoSubmitted, setEducationInfoSubmitted] = useState(false);
  const [workInfo, setWorkInfo] = useState({});
  const [workInfoSubmitted, setWorkInfoSubmitted] = useState(false);
  const [allInfoSubmitted, setAllInfoSubmitted] = useState(false);

  useEffect(() => {
    checkAllInfoSubmitted();
  }, [generalInfoSubmitted, workInfoSubmitted, educationInfoSubmitted]);

  const handleSchoolSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      schoolName: formData.get("schoolName"),
      schoolMajor: formData.get("schoolMajor"),
      schoolStartDate: formData.get("schoolStartDate"),
      schoolEndDate: formData.get("schoolEndDate"),
    };
    setEducationalInfo(data);
    setEducationInfoSubmitted(true);
  };
  const handleGeneralInfoSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);
    const data = {
      fullName: formData.get("fullName"),
      personalEmail: formData.get("personalEmail"),
      phoneNumber: formData.get("phoneNumber"),
    };
    setGeneralInfo(data);
    setGeneralInfoSubmitted(true);
  };

  const handleWorkInfoSubmit = (e) => {
    const formData = new FormData(e.target);
    const data = {
      companyName: formData.get("companyName"),
      positionTitle: formData.get("positionTitle"),
      listOfDuties: formData.get("listOfDuties"),
      dateStarted: formData.get("dateStarted"),
      dateEnded: formData.get("dateEnded"),
    };
    setWorkInfo(data);
    setWorkInfoSubmitted(true);
  };

  const checkAllInfoSubmitted = () => {
    if (generalInfoSubmitted && workInfoSubmitted && educationInfoSubmitted) {
      setAllInfoSubmitted(true);
    }
  };
  return (
    <>
      <Header />
      <div className="app-body">
        <h1>Create Your CV</h1>
        {!generalInfoSubmitted && !allInfoSubmitted && (
          <GeneralInfo
            generalInfo={generalInfo}
            handleGeneralInfoSubmit={handleGeneralInfoSubmit}
          />
        )}
        {generalInfoSubmitted && (
          <div className="completed-info">
            <div>
              <p>
                <b>Name: </b>
                {generalInfo.fullName}
              </p>
              <p>
                <b>Email: </b>
                {generalInfo.personalEmail}
              </p>
              <p>
                <b>Phone: </b>
                {generalInfo.phoneNumber}
              </p>
            </div>
            <button
              onClick={() => {
                setGeneralInfoSubmitted(false);
              }}
            >
              Edit General Info
            </button>
          </div>
        )}
        {!educationInfoSubmitted && !allInfoSubmitted && (
          <EducationalInfo
            educationalInfo={educationalInfo}
            handleSchoolSubmit={handleSchoolSubmit}
          />
        )}
        {educationInfoSubmitted && (
          <div className="completed-info">
            <div>
              <p>
                <b>School: </b>
                {educationalInfo.schoolName}
              </p>
              <p>
                <b>Major: </b>
                {educationalInfo.schoolMajor}
              </p>
              <p>
                <b>Date Started: </b>
                {educationalInfo.schoolStartDate + " - "}

                <b>Date Ended: </b>
                {educationalInfo.schoolEndDate}
              </p>
            </div>
            <button
              onClick={() => {
                setEducationInfoSubmitted(false);
              }}
            >
              Edit Education Info
            </button>
          </div>
        )}
        {!workInfoSubmitted && !allInfoSubmitted && (
          <WorkInfo
            workInfo={workInfo}
            handleWorkInfoSubmit={handleWorkInfoSubmit}
          />
        )}
        {workInfoSubmitted && (
          <div className="completed-info">
            <div>
              <p>
                <b>Company:</b> {workInfo.companyName}
              </p>
              <p>
                <b>Position:</b> {workInfo.positionTitle}
              </p>
              <p>
                <b>Date Started:</b> {workInfo.dateStarted + " - "}{" "}
                <b>Date Ended:</b>
                {workInfo.dateEnded}
              </p>
            </div>
            <button
              onClick={() => {
                setWorkInfoSubmitted(false);
              }}
            >
              Edit Work Info
            </button>
          </div>
        )}
        {allInfoSubmitted && (
          <div className="print-completed-info">
            Print out resume!
            <PDFDownloadLink
              document={
                <ResumePDF
                  generalInfo={generalInfo}
                  workInfo={workInfo}
                  educationalInfo={educationalInfo}
                />
              }
              fileName="resume.pdf"
            >
              <button>Print</button>
            </PDFDownloadLink>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
