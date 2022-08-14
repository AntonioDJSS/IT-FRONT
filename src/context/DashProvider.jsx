import { createContext, useState, useEffect } from "react";
import axiosDash from "../config/axiosDash";

const DashContext = createContext();

export const DashProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axiosDash("/clientes", config);
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClientes();
  }, []);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const { data } = await axiosDash("/api/usuarios");
        setClientes(data);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuarios();
  }, []);

  return (
    <DashContext.Provider
      value={{
        clientes,
      }}
    >
      {children}
    </DashContext.Provider>
  );
};

export default DashContext;
