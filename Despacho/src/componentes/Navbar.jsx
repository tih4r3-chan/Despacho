import React from 'react';
import { RiUserFill } from 'react-icons/ri';

function Navbar() {
  return (
    <div className=''>
    <nav className='bg-gray-800 p-4 flex items-center justify-between'>
      <div className='flex items-centser'>
        {/* nombre/ logo */}
        <div>
          <p className='text-white'>Despacho</p>
        </div>
        {/* opciones */}
        <div className='items-center space-x-4'>
          <a href="#" className='text-white ml-4'>Seguimiento</a>
          <a href="#" className='text-white ml-4'>Sucursal</a>
          <a href="#" className='text-white ml-4'>Contato</a>
        </div>
        {/* botonperfin */}
        <div className='hidden sm:block x-end'>
          <RiUserFill className="h-8 w-8 text-white" />
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
