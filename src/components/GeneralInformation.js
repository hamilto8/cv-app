import React from "react";

class GeneralInformation extends React.Component {
  render() {
    return (
      <div>
        <form className="general-information">
          <label for="name">Name</label>
          <input id="name" type="text" placeHolder="name" />
          <label for="email">Email</label>
          <input id="email" type="email" placeHolder="email" />
          <label for="phone">Phone</label>
          <input id="phone" type="text" placeHolder="phone" />
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
