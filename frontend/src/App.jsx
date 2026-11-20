import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ComponentsPage from "./pages/ComponentsPage.jsx";
import ComponentDetailPage from "./pages/ComponentDetailPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ComponentsPage />} />
        <Route path="/components/:id" element={<ComponentDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}