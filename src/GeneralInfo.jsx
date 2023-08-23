const GeneralInfo = ({ handleGeneralInfoSubmit, generalInfo }) => {
  return (
    <>
      <div>
        <h3>General Info</h3>
        <form className="info-form" onSubmit={handleGeneralInfoSubmit}>
          <label>
            Name:
            <input
              type="text"
              placeholder="name"
              name="fullName"
              defaultValue={generalInfo.fullName || ""}
            />
          </label>
          <label>
            E-Mail:
            <input
              type="email"
              placeholder="name@email.com"
              name="personalEmail"
              defaultValue={generalInfo.personalEmail || ""}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              placeholder="555-555-5555"
              name="phoneNumber"
              defaultValue={generalInfo.phoneNumber || ""}
            />
          </label>
          <button className="submit-info" type="submit">
            Confirm General Info
          </button>
        </form>
      </div>
    </>
  );
};

export default GeneralInfo;
