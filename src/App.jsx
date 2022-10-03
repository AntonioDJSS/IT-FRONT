import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashProvider } from "./context/DashProvider";
import Inicio from "./pages/Inicio";
import AuthLayout from "./layout/AuthLayout";
import Validator from "./pages/Validator";

function App() {
  return (
    <BrowserRouter>
      <DashProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Inicio />} />
            <Route path="registros" element={<Validator />} />
          </Route>
        </Routes>
      </DashProvider>
    </BrowserRouter>
  );
}

export default App;
