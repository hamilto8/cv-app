import React from "react";

class GeneralInformation extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeHolder="name" />
          <input type="email" placeHolder="email" />
          <input type="text" placeHolder="phone" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default GeneralInformation;
