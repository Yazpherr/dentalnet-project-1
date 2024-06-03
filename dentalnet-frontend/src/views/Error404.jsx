import React from "react";
import { NavBarSoloLogo } from "../components/navegation/NavBarSoloLogo";
import { Link } from "react-router-dom";
import { HOME } from "../routes/Paths";

export const Error404 = () => {
  return (
    <>
      <NavBarSoloLogo Url={HOME} />

      <section class="bg-white mt-16">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-gray-300">
              404
            </h1>
            <p class="sora-font  mb-4 text-3xl tracking-tight font-bold text-negro md:text-4xl ">
              Página no encontrada
            </p>
            <p class="text-lg  text-plomo mb-12">
              Lo sentimos, no podemos encontrar esa página.
            </p>
            <Link
              to={HOME}
              class="text-white bg-primary 
                  font-medium rounded-lg text-sm px-5 py-3 text-center "
            >
              Ir al sitio principal
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
