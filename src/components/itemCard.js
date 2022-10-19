import React from "react";
import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  return (
    <Link to={`/resourceDetails/${item.id}`}>
      <div className="bg-white w-full px-5 py-5 border-2 border-gray-100 rounded-md">
        <div className="flex flex-col gap-y-3">
          <div className="flex gap-5 items-start">
            <div>
              <img className="w-10 h-10" src={item.icon_url} />
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="font-semibold">{item.title}</p>
              <p className="text-gray-400">{item.category}</p>
            </div>
          </div>
          <div>
            <a className="text-blue-500" href={item.link}>
              {item.link}
            </a>
          </div>
          <div>
            <p className=" text-gray-500">{item.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
