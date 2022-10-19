import { Routes, Route } from "react-router-dom";
import CreateItem from "./page/CreateItem";

import HomePage from "./page/Home";
import ResourceDetailPage from "./page/ResourceDetail";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resourceDetails/:id" element={<ResourceDetailPage />} />
        <Route path="/createItem" element={<CreateItem />} />
      </Routes>
    </div>
  );
}

export default App;
