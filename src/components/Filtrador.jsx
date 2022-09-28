import React, { useState } from "react";
import "./Filtrador.css";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import CancelIcon from "@mui/icons-material/Cancel";

function Filtrador({ data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      const Folio = value.folio;
      console.log(value.folio);

      return Folio.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord.length != 9) {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const formatearFecha = (fechaFinalizacion) => {
    const nuevaFecha = new Date(fechaFinalizacion);
    return new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(
      nuevaFecha
    );
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-10 w-full mt-10 md:w-4/5 md:px-4 ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <div className=" border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-">
              <div className="flex text-gray-600">
                <div className="mt-7"></div>
                {filteredData.length === 0 ? (
                  <CardMembershipIcon className="mt-1" sx={{ fontSize: 20 }} />
                ) : (
                  <CancelIcon
                    className="mt-1"
                    sx={{ fontSize: 20 }}
                    id="clearBtn"
                    onClick={clearInput}
                  />
                )}
                <label className="ml-3">Folio de constancia</label>
              </div>
              <input
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Ejemplo: 62e2c7e8dfde30f979adfd8d"
                type="text"
                value={wordEntered}
                onChange={handleFilter}
              />
            </div>

            {filteredData.length != 0 && (
              <div>
                {filteredData.slice(0, 18).map((value) => {
                  return (
                    <>
                      <div className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        <div
                          key={value.id}
                          className="mt-3 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-"
                        >
                          <div className=" px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Nombre/s:
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                              <p>{value.nombre}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-">
                          <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Apellido/s:
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                              <p>{value.apellidos}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-">
                          <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Emisión de Constancia:
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                              <p>{formatearFecha(value.createdAt)}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-">
                          <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Nombre de Curso:
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                              <p>{value.curso}</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-">
                          <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Duración:
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                              <p>{value.horas}hrs</p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 border border-gray-300 rounded-md px-3 py-2 shadow-sm focus-within:ring-">
                          <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                              Status del Certificado:
                            </h3>
                            <div className="mt-2 max-w-xl text-sm text-gray-500">
                              <p>{value.estatus}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtrador;
