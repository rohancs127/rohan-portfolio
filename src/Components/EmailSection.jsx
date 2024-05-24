import React from "react";

function EmailSection() {
  return (
    <div className="flex-col text-center">
      <div className="mt-5">Mail me</div>
      <div className="mt-5">
        <input type="email" placeholder="Enter email address" />
      </div>
      <div className="flex-col mt-5">
        <div>
          <textarea placeholder="Enter message" className="px-3 pr-6 resize-none" />
        </div>
        <div className="mt-5">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default EmailSection;
