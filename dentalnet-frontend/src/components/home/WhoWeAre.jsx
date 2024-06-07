function WhoWeAre() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 max-w-screen-xl flex items-center">
        <div className="flex flex-col md:flex-row">
          {/* Columna Derecha */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-4 justify-center">
            <h2 className="text-5xl font-bold mb-4">Quienes somos</h2>
            <img
              src="/imgLanding/WhoWeAre.png"
              alt="Imagen"
              className="mb-4 mt-14"
            />
          </div>

          {/* Columna Izquierda */}
          <div className="w-full md:w-1/2 md:pr-4">
            <h2 className="text-3xl font-bold mb-4 text-right">
              Nuestra gloriosa <br /> <span className="text-5xl">historia</span>
            </h2>

            <div className="bg-gray-200 p-4 border rounded-md">
              <h3 className="text-xl font-bold mb-5">Sobre nosotros</h3>
              <p>
                DentalNet es el nombre que hemos adoptado para dar a conocer
                nuestros servicios en el cuidado dental y bucal. Iniciamos como
                una pequeña clínica dental en Chile, pero con el tiempo y
                nuestros 30 años de experiencia en tratamientos dentales, nos
                hemos convertido en un centro dental moderno y actualizado.
                Nuestro enfoque en la atención personalizada y la calidad en
                todos nuestros servicios nos ha permitido crecer y convertirnos
                en una opción confiable para nuestros clientes. Nuestro objetivo
                es brindarle a usted y a su familia la mejor atención dental y
                bucal, utilizando tecnología de vanguardia y un enfoque integral
                en la salud oral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
