import React from 'react';

function Navbar() {
  return (
    <>
    <nav className='bg-gray-800 p-4'>
      <div className='hidden sm:ml-6 sm:block'>
        <div>
          <p className='text-white'>Despacho</p>
        </div>
        <div className='items-center space-x-4'>
          <a href="#" className='text-white'>Seguimiento</a>
          <a href="#" className='text-white'>Sucursal</a>
          <a href="#" className='text-white'>Contato</a>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
