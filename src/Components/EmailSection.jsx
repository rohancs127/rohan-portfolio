import React from "react";

function EmailSection() {
  return (
    <div>
      <div>Mail me</div>
      <input type="email" placeholder="Enter email address" />
      <div>
        <input placeholder="Enter message" />
        <button>Send</button>
      </div>
    </div>
  );
}

export default EmailSection;
