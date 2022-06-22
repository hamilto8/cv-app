import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div>
        <h1>Experience</h1>
        <label for="company-name">company name</label>
        <input id="company-name" type="text" placeholder="company name" />
        <label for="position">Position</label>
        <input id="position" type="text" placeholder="position" />
        <label for="position-tasks">Tasks</label>
        <textarea
          id="position-tasks"
          className="position-tasks"
          placeholder="describe tasks"
        />
        <label for="work-dates">Dates</label>
        <input type="date" /> to <input type="date" />
      </div>
    );
  }
}

export default Experience;
