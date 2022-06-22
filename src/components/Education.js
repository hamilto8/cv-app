import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div>
        <h1>Education</h1>
        <form className="education">
          <label for="school">School</label>
          <input type="text" id="school" placeholder="School Name" />
          <label for="major">Major</label>
          <input type="text" id="major" placeholder="field of study" />
          <label for="school-date">Date</label>
          <input id="school-date" type="date" /> to <input type="date" />
        </form>
      </div>
    );
  }
}

export default Education;
