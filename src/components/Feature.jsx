/* This example requires Tailwind CSS v2.0+ */
export default function Feature() {
  return (
    <div className="relative bg-gray-50 pt-16 overflow-hidden sm:pt-24 lg:pt-32">
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-amber-500 uppercase">
            Recursos Humanos
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Gestiona los usuarios de tú empresa
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Contrata nuestros servicios para los usuarios de tú empresa y lleva
            un control total sobre cada uno de ellos con nuestra plataforma
            administrativa.
          </p>
        </div>
        <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
          <img
            className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
            src="https://i.imgur.com/k337IfU.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
