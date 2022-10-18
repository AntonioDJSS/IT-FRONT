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
<<<<<<< HEAD
            <Route path="*" element={<P404 />} />
=======
>>>>>>> 3df9985f7bcbd0fec5315e4d9a075d768144d63b
          </Route>
        </Routes>
      </DashProvider>
    </BrowserRouter>
  );
}

export default App;
