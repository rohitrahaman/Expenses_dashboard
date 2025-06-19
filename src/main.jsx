import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./Layout/index.jsx";
import Expenses from "./pages/Expenses.jsx";
import Accounts from "./pages/Accounts.jsx";
import Settings from "./pages/Settings.jsx";
import Summary from "./pages/Summary.jsx";
import Wallets from "./pages/Wallets.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/wallets" element={<Wallets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
