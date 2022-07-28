const fecha = new Date();
const añoActual = fecha.getFullYear();

const Footer = () => {
  return (
    <>
      <footer className="bg-warm-gray-900" aria-labelledby="footer-heading">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="mt-12 border-t border-warm-gray-700 pt-8">
            <p className="text-base text-gray-400 xl:text-center">
              &copy; {añoActual} IKTAN Training, Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      ;
    </>
  );
};

export default Footer;
