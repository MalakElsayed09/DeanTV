import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ShowDetails from "./pages/ShowDetails";
import Watch from "./pages/Watch";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/show/:id"
          element={
            <ProtectedRoute>
              <ShowDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/watch/:episodeId"
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
