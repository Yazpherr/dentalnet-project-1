import ListItem from "../microcomponents/ListItems";

function ListOfServices() {
  return (
    <div className="max-w-screen-xl mx-auto min-w-[320px] py-[80px]">
      <div className="bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between p-6">
          <div className="md:w-1/2">
            <h2
              className="text-4xl font-bold text-gray-900 mb-2 text-center md:text-left
            "
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Nuestras <span className="text-primarySkyblue">Ofertas</span>{" "}
              hacen posible tu sonrisa
            </h2>
            <p
              className="text-gray-600 text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Nuestras ofertas accesibles usando cualquier medio de pago son
              nuestra manera de transmitir nuestro interés en poder brindarles
              una consulta de primera.
            </p>
            {/* contenedor de la imagen */}
            <div className="mt-6 flex justify-center">
              <img
                src="/imgLanding/list-of-service-img.png"
                alt="Doctor"
                className="w-64 h-64 object-contain"
              />
            </div>
          </div>

          {/* Lista de servicios */}
          <div className="md:w-1/2 flex flex-col justify-end items-center md:items-end md:pl-6">
            <div className="w-full md:w-3/4 ">
              <h2
                className="mb-4 text-center md:text-left text-4xl font-bold"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                ¿Qué podemos ofrecerte?
              </h2>
              <div
                className="grid grid-cols-2 gap-4 text-primaryGray mt-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <ul className="space-y-2">
                  <ListItem text="Consultas Dentales" />
                  <ListItem text="Cosmetología Dental" />
                  <ListItem text="Ortodoncia" />
                  <ListItem text="Chequeos de Prevención" />
                </ul>
                <ul className="space-y-2">
                  <ListItem text="Cirugías Maxilobucal" />
                  <ListItem text="Implantes Dentales" />
                  <ListItem text="Consultas Infantiles" />
                  <ListItem text="Consultas Telefónicas" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListOfServices;
