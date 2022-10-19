import React from "react";

export default function Search() {
  return (
    <div className="mx-40 my-10">
      <div>
        <input
          className="bg-white border-2 rounded-sm  w-96 px-3 focus:outline-none"
          type={"text"}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
