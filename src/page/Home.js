import React from "react";
import Buttons from "../components/buttons";
import Header from "../components/header";
import ItemList from "../components/itemList";
import Search from "../components/search";

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#FBFBFB" }}>
      <Header />
      <Buttons />
      <Search />
      <ItemList />
    </div>
  );
}
