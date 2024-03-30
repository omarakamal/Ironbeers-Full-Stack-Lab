import { Routes, Route } from "react-router-dom";
import AllBeersPage from "./pages/AllBeersPage";
import HomePage from "./pages/HomePage";
import RandomBeer from "./pages/RandomBeer";
import AddNewBeer from "./pages/AddNewBeer";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="beers" element={<AllBeersPage />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
        <Route path="/new-beer" element={<AddNewBeer />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailsPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
