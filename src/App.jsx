import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddRecipePage from "./pages/AddRecipePage/AddRecipePage.jsx";
import RecipePage from "./pages/RecipePage/RecipePage.jsx";
import EditRecipePage from "./pages/EditRecipePage/EditRecipePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/add" element={<AddRecipePage />} />
          <Route path="/edit/:id" element={<EditRecipePage />} />
          <Route path="/:id" element={<RecipePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
