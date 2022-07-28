import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthLayout from "./layout/AuthLayout";
import Inicio from "./pages/Inicio";
import Validator from "./pages/Validator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Inicio />} />
          <Route path="certified" element={<Validator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
