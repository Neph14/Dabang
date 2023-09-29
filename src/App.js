import SharedLayout from "./Pages/SharedLayout";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard.jsx";
import FoodOrder from "./Pages/FoodOrder";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="food-order" element={<FoodOrder />} />
            <Route path="food-order2" element={<FoodOrder />} />
            <Route path="food-order3" element={<FoodOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// import "./App.css";
// import Home from "./Components/Home/Home";
// // import Navbar from "./Components/UI/Navbar";

// function App() {
//   return (
//     <>
//       <div className="w-screen h-full overflow-x-hidden">
//         <Home />
//       </div>
//     </>
//   );
// }

// export default App;
