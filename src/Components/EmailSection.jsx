import React from "react";

function EmailSection() {
  return (
    <div className="flex-col text-center">
      <div className="mt-5 text-lg">Mail me</div>
      <div className="mt-5">
        {/* <input type="email" placeholder="Enter email address" className="outline-none px-3 py-1 rounded-lg"/> */}
        <div className="flex items-center gap-5 bg-gray-900 text-stone-100 border-purple-900 border border-opacity-50 rounded-md px-5 py-3">
          <img src="src/assets/socialMediaLogo/gmail.svg" className="w-10"/>
          <div>rohankumar5803@gmail.com</div>
        </div>
      </div>

      <div className="flex-col mt-5">
        {/* <div>
          <textarea placeholder="Enter message" className="px-3 pr-16 resize-none outline-none overflow-hidden rounded-lg" />
        </div> */}
        <div className="mt-5">
          <a href="mailto:rohankumar5803@gmail.com"><button className=" focus:outline-none relative left-0 right-0 bottom-0 font-bold bg-indigo-900 text-slate-200 border-none shadow hover:shadow-sm hover:shadow-indigo-400 transition-all duration-200 mb-3">Send</button></a>
        </div>
      </div>
    </div>
  );
}

export default EmailSection;
