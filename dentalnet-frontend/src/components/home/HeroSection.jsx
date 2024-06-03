function HeroSection() {
  return (
    <section className="bg-white py-20" id='index-hero'>
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Primera columna */}
          <div className="w-full md:w-1/2 text-center md:text-left font-ubuntu">
            <h1
              className="text-4xl font-bold text-gray-900 font-ubuntu"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ofrecemos servicios <br />
              de <span className="text-primarySkyblue">alta</span> calidad
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-lg text-gray-700 font-ubuntu"
            >
              Vive la experiencia de un servicio dental premium, diseñado para que te sientas cómodo y seguro en cada visita.
            </p>
            <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-6">
              <button className="px-12 py-3 bg-primaryBlue text-white rounded-md hover:bg-primarySkyblue transition duration-300">
                Comenzar
              </button>
              <button className="px-12 py-3 lg:ml-10 border-2 border-gray-500 text-gray-500 rounded-md">
                Leer más
              </button>
            </div>
          </div>

          {/* segunda columna */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="/imgLanding/dentist-principal.png"
              alt="Descripción de la imagen"
              className="w-3/4 h-auto rounded-lg shadow-sm mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
