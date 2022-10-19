import React from "react";
import Header from "../components/header";

export default function CreateItem() {
  return (
    <div>
      <Header />
      <div className="">
        <div className="grid grid-cols-2">
          <div className="  my-20 flex flex-col items-center gap-y-5">
            <p className="text-xl font-semibold">Item Details</p>
            <div className="flex flex-col gap-y-1">
              <label className="text-gray-500 uppercase">Item Name</label>
              <input className=" focus:outline-none bg-white w-64 px-3 py-2 border-2" />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-gray-500 uppercase">Link</label>
              <input className=" focus:outline-none bg-white w-64 px-3 text-blue-600  py-2 border-2" />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-gray-500 uppercase">Resource Name</label>
              <input className=" focus:outline-none bg-white w-64 px-3 text-blue-600  py-2 border-2" />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-gray-500 uppercase">Description</label>
              <input className=" focus:outline-none bg-white w-64 px-3 text-blue-600  py-2 border-2" />
            </div>
            <button className=" uppercase bg-blue-600 font-medium text-white px-4 py-2 mt-3 rounded-md">
              Create
            </button>
          </div>
          <div>
            <img
              className="w-full  h-2/3"
              src="https://res.cloudinary.com/dtme6qv4c/image/upload/v1666158514/image_9.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
