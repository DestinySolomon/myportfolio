import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/components/page";
import NotFound from "../pages/home/components/notFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
