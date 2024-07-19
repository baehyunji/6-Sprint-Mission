import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import UsedMarketPage from "./pages/UsedMarketPage";
import ProductDetail from "./pages/ProductDetail";

function Main() {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/items" element={<UsedMarketPage />} />
          <Route path="/items/:productId" element={<ProductDetail />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
}

export default Main;
