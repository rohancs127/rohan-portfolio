import React from "react";

function EmailSection() {
  return (
    <div className="flex-col">
      <div className="self-center">Mail me</div>
      <div><input type="email" placeholder="Enter email address" /></div>
      <div className="flex-col">
        <div><input placeholder="Enter message" /></div>
        <div><button>Send</button></div>
      </div>
    </div>
  );
}

export default EmailSection;
