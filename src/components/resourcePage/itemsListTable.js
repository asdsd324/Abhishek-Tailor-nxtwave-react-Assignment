import React, { useState } from "react";

export default function ItemsListTable({ item, searchData }) {
  const [checked, setChecked] = useState(false);
  const [numberItemShow, setNumberItemShow] = useState(0);

  const resourceItems = searchData ? searchData : item.resource_items;

  return (
    <div className="mt-10">
      <div className="flex flex-col items-star justify-start">
        <div className=" grid grid-cols-4 gap-x-10  border border-gray-200 px-5 py-5">
          <p></p>
          <p>TITLE</p>
          <p>DESCRIPTION</p>
          <p>LINK</p>
        </div>
        {resourceItems
          .slice(numberItemShow, numberItemShow + 6)
          .map((item, i) => (
            <div
              key={i}
              className=" grid grid-cols-4 gap-x-10 border border-gray-100 px-5 py-5"
            >
              <input
                className="w-5"
                type="checkbox"
                id={item.id}
                name={item.title}
                value={checked}
              />
              <p>{item.title}</p>
              <p className=" text-gray-500 ">{item.description}</p>
              <a href={item.link} className="text-blue-600">
                {item.link}
              </a>
            </div>
          ))}
        <div className="my-10 flex  justify-between">
          <div className="flex gap-x-5">
            <button className=" rounded-md bg-green-400 px-4 py-2 text-white">
              ADD ITEM
            </button>
            <button className=" rounded-md bg-gray-300 px-4 py-2 text-white">
              ADD ITEM
            </button>
          </div>
          <div className="flex gap-x-5">
            {numberItemShow > 0 && (
              <button
                onClick={() => setNumberItemShow(numberItemShow - 8)}
                className=" bg-gray-700 text-white px-3 rounded-md"
              >
                Previous
              </button>
            )}
            <button
              onClick={() => setNumberItemShow(numberItemShow + 8)}
              className=" bg-gray-700 text-white px-3 rounded-md"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
