function StripeTwo() {
  return (
    <section className="bg-primaryBlue py-20 font-ubuntu">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl mb-4 text-white text-center">
            ¡iluminaremos <span className="font-bold">tu sonrisa!</span>
          </h2>

          <p className="text-lg text-center text-white mb-6">
            Nuestra misión ha sido siempre ayudar a nuestros pacientes a
            alcanzar una salud mental óptima y una sonrisa radiante. Durante más
            de 30 años, nos hemos esforzado por ser la opción más confiable para
            nuestros clientes, utilizando un enfoque personalizado que se adapte
            a sus necesidades específicas
          </p>

          <button className="px-8 py-3 border border-white text-white rounded-md hover:bg-blue-800 transition duration-300 ease-in-out">
            Ingresa ahora
          </button>

        </div>
      </div>
    </section>
  );
}

export default StripeTwo;
