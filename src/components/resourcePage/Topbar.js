import React from "react";
import { Link } from "react-router-dom";

export default function Topbar({ item }) {
  return (
    <div>
      <div className="flex flex-col gap-2 items-start">
        <Link to="/">
          <p>Resource</p>
        </Link>
        <div className="flex gap-x-3 mt-6">
          <img className="w-14 h-14" src={item.icon_url} />
          <div className="flex flex-col gap-y-1">
            <p className=" text-xl font-semibold">{item.title}</p>
            <p className=" text-gray-400">{item.id}</p>
            <a className="text-blue-600" href={item.link}>
              {item.link}
            </a>
          </div>
        </div>
        <p className="text-gray-500">{item.description}</p>
        <button className="mt-5 bg-blue-600 text-white px-5 py-2 uppercase rounded-md">
          Update
        </button>
      </div>
    </div>
  );
}
