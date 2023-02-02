import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import NavBarComponent from "./components/NavBarComponent";
import FavouritePokemonPage from "./components/FavouritePokemonPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <div className="App">
        <NavBarComponent />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/favouritepokemon"
              element={<FavouritePokemonPage />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
