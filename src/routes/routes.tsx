import { Routes, Route } from "react-router";

import { Error } from "@/pages/error";
import { Index } from "@/pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Index />} />
    </Routes>
  );
}
