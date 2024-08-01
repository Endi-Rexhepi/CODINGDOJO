import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import DisplayProducts from "./components/DisplayProducts";
import CreateProduct from "./components/CreateProduct";
import Navbar from "./components/Navbar";
import User from "./components/Product";

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<DisplayProducts />} />
        <Route path="/products/new" element={<CreateProduct />} />
        <Route path="/products/:id" element={<User />} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
