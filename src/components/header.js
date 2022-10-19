import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between items-center px-20 py-5 bg-white  border-b">
      <div>
        <Link to="/">
          <img src="./abhishek-tailor-nxtwave-react-assignment/img/logo.png" />
        </Link>
      </div>
      <div className="flex gap-x-3">
        <div className="px-6 py-2 bg-blue-600 text-white rounded-md">
          <Link to="/createItem">
            <button>ADDS</button>
          </Link>
        </div>
        <img className=" rounded-full" src="/img/image.png" />
      </div>
    </div>
  );
}
