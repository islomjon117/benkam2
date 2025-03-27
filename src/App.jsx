import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./Layout/MainLayout";
import HeaderPage from "./Pages/HeaderPage";
import { FilterContextProvider } from "./context/index.jsx";
import SertifcationsPage from "./Pages/SertifcationsPage.jsx";
import View from "./components/viewpage/View.jsx";
import UsaPage from "./Pages/UsaPage.jsx";
import OfferPage from "./Pages/OfferPage.jsx";
import AboutPage from "./Pages/AboutPage.jsx";
import ProductsPage from "./Pages/ProductsPage.jsx";
import DdshopPage from "./Pages/DdshopPage.jsx";
import GreenexPage from "./Pages/GreenexPage.jsx";
import OfferAluminiumPage from "./Pages/OfferAluminiumPage.jsx";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HeaderPage />} />
        <Route path="sertifications" element={<SertifcationsPage />} />
        <Route path="view/:id" element={<View />} />
        <Route path="usa" element={<UsaPage />} />
        <Route path="about" element={<AboutPage />} />
        
        <Route path="offer" element={<OfferPage />} />
        <Route path="offer/Aluminium-profiles" element={<OfferAluminiumPage/>}/>
        Products page va Die Design Shop
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/die-design-shop" element={<DdshopPage />} />
        <Route path="products/greenEx" element={<GreenexPage/>} />


        {/* 404 Sahifa */}
        <Route path="*" element={<h1>404 - Sahifa topilmadi</h1>} />
      </Route>
    )
  );

  return (
    <FilterContextProvider>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </FilterContextProvider>
  );
}

export default App;
