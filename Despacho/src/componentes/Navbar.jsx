import React from "react";
import { RiUserFill } from "react-icons/ri";

function Navbar() {
  return (
    <div className="grid justify-items-center bg-teal-500">
      <nav className="p-4 flex ">
        <div className="flex ">
          {/* nombre/ logo */}

          <h2 className="text-xl font-bold transition-all hover:text-2xl duration-500 mr-auto">
            Despacho
          </h2>

          {/* opciones */}
          <div className="items-center space-x-7">
            <a href="#" className="ml-4">
              Seguimiento
            </a>
            <a href="#" className="ml-4">
              Sucursal
            </a>
            <a href="#" className="ml-4">
              Contacto
            </a>
          </div>
          {/* perfil */}
          <div className="hidden sm:block x-end">
            <RiUserFill className="h-8 w-8" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
