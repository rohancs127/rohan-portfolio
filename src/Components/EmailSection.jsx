import React from "react";

function EmailSection() {
  return (
    <div className="flex-col text-center">
      <div className="mt-5 text-lg">Mail me</div>
      <div className="mt-5">
        <input type="email" placeholder="Enter email address" className="outline-none px-3 py-1 rounded-lg"/>
      </div>
      <div className="flex-col mt-5">
        <div>
          <textarea placeholder="Enter message" className="px-3 pr-16 resize-none outline-none overflow-hidden rounded-lg" />
        </div>
        <div className="mt-5">
          <button className=" focus:outline-none relative left-0 right-0 bottom-0 font-bold bg-indigo-900 text-slate-200 border-none shadow hover:shadow-sm hover:shadow-indigo-400 transition-all duration-200 mb-3">Send</button>
        </div>
      </div>
    </div>
  );
}

export default EmailSection;
