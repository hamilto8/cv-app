const EducationalInfo = ({ handleSchoolSubmit, educationalInfo }) => {
  return (
    <>
      <div>
        <h3>Educational Info</h3>
        <form className="info-form" onSubmit={handleSchoolSubmit}>
          <label>
            School:
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              defaultValue={educationalInfo.schoolName || ""}
            />
          </label>
          <label>
            Major:
            <input
              type="text"
              name="schoolMajor"
              placeholder="Field of Study"
              defaultValue={educationalInfo.schoolMajor || ""}
            />
          </label>
          <label>
            Start Date:
            <input
              name="schoolStartDate"
              type="date"
              defaultValue={educationalInfo.schoolStartDate || ""}
            />
          </label>
          to
          <label>
            End Date:
            <input
              name="schoolEndDate"
              type="date"
              defaultValue={educationalInfo.schoolEndDate || ""}
            />
          </label>
          <button className="submit-info" type="submit">
            Confirm Education Info
          </button>
        </form>
      </div>
    </>
  );
};

export default EducationalInfo;
