/* This example requires Tailwind CSS v2.0+ */
export default function Area() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="px-10 w-full mt-10 md:w-4/5 md:px-4 ">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto"></div>
          <div
            type="text"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-8 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="mt-2 block text-sm font-bold text-amber-500">
              Ejemplo de folio: 62e2c7e8dfde30f979adfd8d
            </span>
            <span className="mt-2 block text-sm font-medium text-gray-500">
              A continuación ingresa los datos de la constancia de la constancia
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
