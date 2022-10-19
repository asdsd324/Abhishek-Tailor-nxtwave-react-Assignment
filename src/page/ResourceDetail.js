import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../components/header";
import ItemsListTable from "../components/resourcePage/itemsListTable";
import Topbar from "../components/resourcePage/Topbar";

export default function ResourceDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState(null);

  async function fecthResourceDetails() {
    const resourceDetails = await axios.get(
      `https://media-content.ccbp.in/website/react-assignment/resource/${id}.json`
    );
    setData(resourceDetails.data);
    console.log(resourceDetails.data);
  }

  async function updateResource() {
    const update = {
      link: "hdgfsf",
      id: "90",
      title: "okk",
      description: "djgjdfj",
    };
    axios
      .put(
        `https://media-content.ccbp.in/website/react-assignment/resource/${update}.json`
      )
      .then((res) => console.log(res.data));
  }

  useEffect(() => {
    fecthResourceDetails();
  }, []);

  useEffect(() => {
    if (searchText.length === 0) {
      setSearchData(null);
    }
    handleSearchItem();
  }, [searchText]);

  function handleSearchItem() {
    if (searchText.length > 1) {
      const res = data.resource_items.filter(
        (res) => res.title.toLowerCase() === searchText.toLocaleLowerCase()
      );
      if (res) {
        setSearchData(res);
      } else {
        setSearchData(null);
      }
    }
  }

  return (
    <div>
      <Header />

      <div className="mx-40 mt-5">
        {data && (
          <div>
            <Topbar item={data} />
            <div className="mt-5 flex flex-row justify-between">
              <div>
                <p className="text-xl">Items</p>
              </div>
              <div className="flex gap-x-5">
                <input
                  className="bg-white border-2 rounded-sm w-[30rem] px-3 focus:outline-none"
                  type={"text"}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  placeholder="Search"
                />
                <button>Sort</button>
              </div>
            </div>
            <ItemsListTable searchData={searchData} item={data} />
          </div>
        )}
      </div>
    </div>
  );
}
