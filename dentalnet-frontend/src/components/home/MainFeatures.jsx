function MainFeatures() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Título Dividido en Dos Columnas */}
          <div className="w-full md:w-1/2">
            <div className="md:flex md:space-x-4">
              <p className="text-lg md:w-1/2">¿Qué nos hace especiales?</p>
            </div>
          </div>

          <p className="text-lg md:w-1/2 text-right">
            Caracteristicas principales
          </p>
        </div>

        {/* Seis Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tarjeta 1 */}
          <div className="bg-gray-200 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Tecnologia Laser</h3>
            <p className="text-gray-700">
              Nuestro centro dental cuenta con la tecnología láser más avanzada
              del mercado, lo que nos permite ofrecer tratamientos precisos y
              eficaces para su boca.
            </p>
          </div>
          {/* Tarjeta 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Tarjeta 2</h3>
            <p className="text-gray-700">Contenido de la tarjeta 2.</p>
          </div>
          {/* Tarjeta 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Tarjeta 3</h3>
            <p className="text-gray-700">Contenido de la tarjeta 3.</p>
          </div>
          {/* Tarjeta 4 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Tarjeta 4</h3>
            <p className="text-gray-700">Contenido de la tarjeta 4.</p>
          </div>
          {/* Tarjeta 5 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Tarjeta 5</h3>
            <p className="text-gray-700">Contenido de la tarjeta 5.</p>
          </div>
          {/* Tarjeta 6 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-2">Tarjeta 6</h3>
            <p className="text-gray-700">Contenido de la tarjeta 6.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainFeatures;
