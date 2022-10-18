import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashProvider } from "./context/DashProvider";
import Inicio from "./pages/Inicio";
import AuthLayout from "./layout/AuthLayout";
import Validator from "./pages/Validator";
import P404 from "./pages/P404";

function App() {
  return (
    <BrowserRouter>
      <DashProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Inicio />} />
            <Route path="registros" element={<Validator />} />
            <Route path="*" element={<P404 />} />
          </Route>
        </Routes>
      </DashProvider>
    </BrowserRouter>
  );
}

export default App;
