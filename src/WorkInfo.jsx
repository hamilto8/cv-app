const WorkInfo = ({ handleWorkInfoSubmit, workInfo }) => {
  return (
    <>
      <div>
        <h3>Work Info</h3>
        <form className="info-form" onSubmit={handleWorkInfoSubmit}>
          <label>
            Company Name:
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              defaultValue={workInfo.companyName || ""}
            />
          </label>
          <label>
            Position Title
            <input
              type="text"
              name="positionTitle"
              placeholder="Position Title"
              defaultValue={workInfo.positionTitle || ""}
            />
          </label>
          <label>
            Description of duties:
            <textarea
              name="listOfDuties"
              defaultValue={workInfo.listOfDuties || ""}
            ></textarea>
          </label>
          <label>
            Dates started:
            <input
              type="date"
              name="dateStarted"
              defaultValue={workInfo.dateStarted || ""}
            />
            Date Ended:
            <input
              type="date"
              name="dateEnded"
              defaultValue={workInfo.dateEnded || ""}
            />
          </label>
          <button className="submit-info" type="submit">
            Confirm Work Info
          </button>
        </form>
      </div>
    </>
  );
};

export default WorkInfo;
