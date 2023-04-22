import { Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Details from "./pages/Details";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Index />} />
        <Route path="details/:country_name" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default App;
