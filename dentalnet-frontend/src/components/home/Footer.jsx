const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white py-8 pb-0">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Información de la empresa */}
          <div>
            <img className="h-20" src="./img/ico-dentalnet-footer.svg"/>
            <p className="text-gray-300">
              DentalNet es nuestro sello por el cual nos hemos dado a conocer en el cuidado dental y bucal.
            </p>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Les damos la bienvenida</h4>
            <p className="text-gray-300">
              ¿Quieres visitar nuestra clínica?
            </p>
            <p className="text-gray-300">
              Lunes - Viernes<br />
              08 am - 17 pm
            </p>
          </div>

          {/* Enlaces importantes */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces importantes</h4>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#!" className="hover:underline">Facebook</a></li>
              <li><a href="#!" className="hover:underline">Twitter</a></li>
              <li><a href="#!" className="hover:underline">Instagram</a></li>
              <li><a href="#!" className="hover:underline">Carrera</a></li>
              <li><a href="#!" className="hover:underline">Soporte</a></li>
              <li><a href="#!" className="hover:underline">Política de privacidad</a></li>
            </ul>
          </div>

          {/* Datos de contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Salúdanos</h4>
            <p className="text-gray-300">hello@reallygreatsite.com</p>
            <p className="text-gray-300">787 Denti Street, Rgua City, CH 39200</p>
          </div>
        </div>
      </div>
      <div className="bg-primarySkyblue text-center py-4 mt-8">
        <p className="text-white">&copy; 2024, Todos los derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
