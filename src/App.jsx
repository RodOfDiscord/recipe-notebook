import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage.jsx";
import RecipePage from "./pages/RecipePage/RecipePage.jsx";
import EditRecipePage from "./pages/EditRecipePage/EditRecipePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add" element={<AddRecipePage />} />
        <Route path="/edit/:id" element={<EditRecipePage />} />
        <Route path="/:id" element={<RecipePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
