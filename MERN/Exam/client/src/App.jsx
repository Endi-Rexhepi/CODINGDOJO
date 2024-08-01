import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DisplayPets from "./components/DisplayPets";
import Pet from "./components/Pet";
import AddNewPet from "./components/AddNewPet";
import UpdatePet from "./components/UpdatePet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayPets />} />
        <Route path="/pets/addnewpet" element={<AddNewPet />} />
        <Route path="/pets/:id" element={<Pet />} />
        <Route path="/pets/edit/:id" element={<UpdatePet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
