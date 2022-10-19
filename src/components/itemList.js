import axios from "axios";
import React, { useEffect, useState } from "react";
import ItemCard from "./itemCard";

export default function ItemList() {
  const [data, setData] = useState([]);

  async function fetchItems() {
    const itemListData = await axios.get(
      "https://media-content.ccbp.in/website/react-assignment/resources.json"
    );
    console.log(itemListData.data);
    setData(itemListData.data);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="mx-40 mb-10 grid grid-cols-3 gap-10">
      {data && data.map((item, i) => <ItemCard item={item} key={i} />)}
    </div>
  );
}
