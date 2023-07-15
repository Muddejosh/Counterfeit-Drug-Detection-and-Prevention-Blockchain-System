import React from 'react';
import "./App.css";
import AssignRoles from "./AssignRoles";
import Home from "./Home";
import AddMed from "./AddMed";
import Supply from "./Supply";
import Track from "./Track";
import QRgenerator from "./QRgenerator";
import Signup from "./Signup";
import { AuthProvider, useAuth } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/home"
            element={<PrivateRoute component={Home} />}
          />
          <Route
            path="/roles"
            element={<PrivateRoute component={AssignRoles} />}
          />
          <Route
            path="/addmed"
            element={<PrivateRoute component={AddMed} />}
          />
          <Route
            path="/supply"
            element={<PrivateRoute component={Supply} />}
          />
          <Route
            path="/track"
            element={<PrivateRoute component={Track} />}
          />
          <Route
            path="/QRgenerator"
            element={<PrivateRoute component={QRgenerator} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? <Component /> : <Navigate to="/login" replace />;
}

export default App;
