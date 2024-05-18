import React from "react";

function MoreInfo() {
  return (
    <div>
      <div className="text-lg flex-col text-center mx-72 rounded-lg overflow-hidden mb-5 shadow shadow-md shadow-zinc-800">
        <div className="bg-slate-900 p-5">
          <div>Highschool: Sri Ramakrishna Highschool Puttur</div>
          <div>2016-2019</div>
        </div>
        <div className="bg-slate-900 p-5">
          <div>Pre-University: St. Philomena PU College Puttur</div>
          <div>2019-2021</div>
        </div>
        <div className="bg-slate-900 p-5">
          <div>Graduation: Sahyadri College Of Engineering & Management</div>
          <div>Computer Science & Engineering</div>
          <div>2021-Present</div>
        </div>
      </div>
    </div>
  );
}

export default MoreInfo;
