import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "../pages/Create";
import Select from "../pages/Select";
import Delete from "../pages/Delete";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Select />} />
      <Route path="/create" element={<Create />} />
      <Route path="/delete" element={<Delete />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
