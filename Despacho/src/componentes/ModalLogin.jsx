import React, { useState } from "react";

function ModalLogin({ open, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
   
    onClose();
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 ${open ? "" : "hidden"}`}>
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800 font-medium">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800 font-medium">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Iniciar Sesión</button>
          </div>
        </form>
        <button onClick={onClose} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">Cerrar</button>
      </div>
    </div>
  );
}

export default ModalLogin;

export const Modal = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-10 flex justify-center items-center ${
        open ? "visible bg-black/50 " : "invisible"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation;
        }}
        className={`flex flex-col items-end bg-white  transition-all rounded-lg ${
          open ? "scale-90 opacity-100" : "scale-100 opacity-0"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="z-20 -mb-6 fill-emerald-500 hover:fill-emerald-600  font-bold hover:text-4xl text-3xl bg-teal-600 text-white transition-all w-14 h-14 "
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
