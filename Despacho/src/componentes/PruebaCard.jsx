import React from 'react';

function Card({ title, description, buttonText }) {
  return (
    <div className="w-80 p-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-white mb-20 mr-10 h-full overflow-hidden">
      <a href="#">
        <h5 className="mb-1 text-lg  font-bold tracking-tight text-gray-900 dark:text-gray-800">{title}</h5>
      </a>
      <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <div className="flex justify-center">
        <a href="#" className="inline-flex items-center justify-center w-80 h-10 px-3 py-2 text-base text-center text-white bg-teal-500 border rounded-xl font-bold hover:bg-teal-600 transition-all duration-500 ">
          {buttonText}
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
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
