import AOS from "aos";
import "aos/dist/aos.css";

// Inicializa AOS
AOS.init();

function StripeOne() {
  return (
    <section className="bg-primaryBlue my-14 py-8 font-ubuntu" id="index-firtStripe">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col md:flex-row items-center m-0">
          {/* Parte Izquierda */}
          <div className="w-full md:w-1/3 text-white text-center  mr-8 md:text-left mb-8 md:mb-0">
            <h1
              className="text-4xl font-bold text-center "
              data-aos-delay="100"
              data-aos="fade-up"
            >
              ¿Qué ofrece nuestra web?
            </h1>
            <p
              className="mt-4 text-lg text-center"
              data-aos-delay="100"
              data-aos="fade-up"
            >
              Tenemos los siguientes servicios para ti
            </p>
          </div>

          {/* Parte Derecha */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-center md:justify-end md:ml-4">
            {/* Carta 1 */}
            <div
              className="w-full md:w-1/4 p-2 md:p-4"
              data-aos-delay="200"
              data-aos="fade-up"
            >
              <div className="bg-white rounded-lg shadow-lg p-4 ">
                <div className="flex justify-center items-center py-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={40}
                    height={40}
                    color={"#52525B"}
                    fill={"none"}
                  >
                    <path
                      d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 6.83185C15.4232 7.43624 16.5638 8.57677 17.1682 10M14.654 2C18.1912 3.02076 20.9791 5.80852 22 9.34563"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <h2 className="text-xl font-bold text-primaryDarkGray text-center">
                  Asistencia <br /> telefonica
                </h2>
              </div>
            </div>

            {/* Carta 2 */}
            <div
              className="w-full md:w-1/4 p-2 md:p-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-center items-center py-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={40}
                    height={40}
                    color={"#52525B"}
                    fill={"none"}
                  >
                    <path
                      d="M15 2.5V4C15 5.41421 15 6.12132 15.4393 6.56066C15.8787 7 16.5858 7 18 7H19.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 16V8C4 5.17157 4 3.75736 4.87868 2.87868C5.75736 2 7.17157 2 10 2H14.1716C14.5803 2 14.7847 2 14.9685 2.07612C15.1522 2.15224 15.2968 2.29676 15.5858 2.58579L19.4142 6.41421C19.7032 6.70324 19.8478 6.84776 19.9239 7.03153C20 7.2153 20 7.41968 20 7.82843V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 11H16M8 14H16M8 17H12.1708"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h2 className="text-xl font-bold text-primaryDarkGray text-center">
                  Recetas <br /> médicas
                </h2>
              </div>
            </div>

            {/* Carta 3 */}
            <div
              className="w-full md:w-1/4 p-2 md:p-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="bg-white rounded-lg shadow-lg p-4">
                <div className="flex justify-center items-center py-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={40}
                    height={40}
                    color={"#52525B"}
                    fill={"none"}
                  >
                    <path
                      d="M18 2V4M6 2V4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 8H20.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 8H21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h2 className="text-xl font-bold text-primaryDarkGray text-center">
                  Agenda tu <br /> cita
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StripeOne;
