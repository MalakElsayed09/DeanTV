import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowDetails from "./pages/ShowDetails"; // ADD THIS IMPORT
import Watch from "./pages/Watch";
import ProtectedRoute from "./components/ProtectedRoute";
import AppNavbar from "./components/Navbar";

function App() {
  return (
    <>
      <AppNavbar />

      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* ADD THIS ROUTE */}
        <Route
          path="/show/:id"
          element={
            <ProtectedRoute>
              <ShowDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/watch/:episodeId" // CHANGE :id to :episodeId
          element={
            <ProtectedRoute>
              <Watch />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
