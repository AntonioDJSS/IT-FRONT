export default function Title() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="md:ml-[10%]">
        <div className="bg-white">
          <div className="">
            <div className="overflow-hidden md:rounded-bl-[200px] rounded-bl-[100px] bg-amber-500 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    <span className="block">Validación de constancia</span>
                    <span className="block">de participación</span>
                  </h2>
                  <p className="mt-4 text-lg leading-6 text-amber-100">
                    Para verificar la validez de una constancia de participación
                    en uno de los cursos de IKTAN Training debes ingresar el
                    número de folio correspondiente a la constancia
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-amber-600 shadow hover:bg-indigo-50"
                  >
                    ¿No tienes una constancia?
                  </a>
                </div>
              </div>
              <div className="-mt-6 md:-mt-24 md:aspect-w-2 md:aspect-h-1">
                <img
                  className="full translate-y-6 transform md:rounded-lg object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                  src="https://imgur.com/MGobBMh.png"
                  alt="App screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
