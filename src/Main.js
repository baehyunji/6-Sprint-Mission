import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/ui/App";
import UsedMarketPage from "./pages/UsedMarketPage";
import ProductRagistrationPage from "./pages/ProductRagistrationPage";
import FreeBoardPage from "./pages/FreeBoardPage";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/free" element={<FreeBoardPage />} />
          <Route path="/items" element={<UsedMarketPage />} />
          <Route path="/additem" element={<ProductRagistrationPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
