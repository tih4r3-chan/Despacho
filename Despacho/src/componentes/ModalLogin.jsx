import React from "react";

function ModalLogin({ open, onClose }) {
  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ${open ? "" : "hidden"}`}>
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese su usuario"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Iniciar Sesión
            </button>
            <button
              type="button"
              onClick={onClose}
              className="inline-block align-baseline font-bold text-sm text-teal-600 hover:text-teal-800"
            >
              Cerrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalLogin;
