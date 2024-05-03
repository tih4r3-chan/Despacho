import React from "react";
import logo from "../assets/images/logo.jpeg";

export const SearchBar = () => {
  return (
    <>
      <section className="grid grid-cols-12 h-[600px] items-center justify-items-center">
        <div className="col-span-3">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-span-8">
          <form>
            <label className="block text-sm  text-white">Nombre</label>
            <input
              required
              placeholder="Ingresa el n° de orden de despacho"
              type="text"
              className="bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-300 focus:border-blue-300 block duration-500 w-[500px] p-2.5 outline-none"
            />
          </form>
        </div>
      </section>
    </>
  );
};
