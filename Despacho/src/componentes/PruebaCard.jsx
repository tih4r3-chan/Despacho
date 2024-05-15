import React, { useState } from 'react';

function Card({ title, description, buttonText }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario
    console.log(formData);
    // Limpia el formulario después de enviarlo
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    closeModal();
  };

  return (
    <div className="w-80 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mb-20 mr-10 h-full overflow-hidden">
      <a href="#">
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-800">{title}</h5>
      </a>
      <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <div className="flex justify-center">
        <button onClick={openModal} className="inline-flex items-center justify-center w-80 h-10 px-3 py-2 text-base text-center text-white bg-teal-500 border rounded-xl font-bold hover:bg-teal-600 transition-all duration-500 ">
          {buttonText}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-8 rounded-lg z-50">
            <h2 className="text-lg font-semibold mb-4">Cotizar</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-800">Nombre</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-800">Correo electrónico</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-800">Mensaje</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2 resize-none"></textarea>
              </div>
              <div className="text-right">
                <button type="button" onClick={closeModal} className="mr-4 px-4 py-2 text-gray-600 hover:text-gray-800 font-semibold">Cancelar</button>
                <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

function PruebaCards() {
  return (
    <div className="flex justify-center">
      <Card title="Enviar" description="Envíos desde sucursal virtual" buttonText="Envia" />
      <Card title="Cotizar" description="Cotiza según tus necesidades" buttonText="Cotiza" />
      <Card title="Sucursales" description="Conoce tu agencia más cercana" buttonText="Sucursales" />
    </div>
  );
}

export default PruebaCards;
