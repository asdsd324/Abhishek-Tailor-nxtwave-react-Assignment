import React from "react";

export default function Buttons() {
  return (
    <div className="mt-10 flex justify-center items-center font-semibold">
      <div className="px-20 py-2 rounded-sm bg-blue-600 text-white">
        <button>
          <p>Resources</p>
        </button>
      </div>
      <div className="px-20 py-2 rounded-sm  bg-gray-100   text-black">
        <button>
          <p>Requests</p>
        </button>
      </div>
      <div className="px-20 py-2 rounded-sm  bg-gray-100   text-black">
        <button>
          <p>Users</p>
        </button>
      </div>
    </div>
  );
}
