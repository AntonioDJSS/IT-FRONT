import Filtrador from "../components/Filtrador";
import useDash from "../hooks/useDash";
import Area from "../components/Area";

export default function Title() {
  const { clientes } = useDash();

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-48 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className=" w-full h-full object-cover object-top"
            src="https://imgur.com/Lh74MCR.png"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-56 sm:px-6 lg:px-8">
          <div className="w-full py-6 flex items-center justify-between lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">IKTAN</span>
                <img
                  className="h-10 w-auto"
                  src="https://imgur.com/zDZKFLN.png"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-teal-50"
                >
                  IKTAN TRAINING
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Registro Público de Capacitación
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Para verificar la validez de una constancia de participación en uno
            de los cursos de IKTAN Training debes ingresar el número de folio
            correspondiente a la constancia.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-40 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-1 lg:gap-y-0 lg:gap-x-8">
          <div className="flex flex-col bg-white rounded-2xl shadow-xl">
            <div className="flex-1 relative pb-10">
              <Area />
              <Filtrador data={clientes} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
