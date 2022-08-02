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
      const Folio = value.id;
      return Folio.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord.length != "18") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
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
            <div className="mt-8 flex flex-col">
              <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                          >
                            Folio
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Nombre
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Apellido
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Curso
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Horas
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Estatus
                          </th>
                        </tr>
                      </thead>
                      {filteredData.length != 0 && (
                        <tbody className="min-w-full divide-y divide-gray-300">
                          {filteredData.slice(0, 18).map((value, key) => {
                            return (
                              <>
                                <tr key={value.id}>
                                  <td className=" whitespace-nowrap py-4 pl-4 text-sm ">
                                    <div className="flex items-center">
                                      <div className="ml-4">
                                        <div className="font-medium text-gray-900">
                                          {value.id}
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <div className="text-gray-900">
                                      {value.nombre}
                                    </div>
                                  </td>

                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {value.apellido}
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <div className="text-gray-900">
                                      {value.curso}
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <div className="text-gray-900">
                                      {value.horas}
                                    </div>
                                  </td>
                                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                      {value.status}
                                    </span>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      )}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filtrador;
