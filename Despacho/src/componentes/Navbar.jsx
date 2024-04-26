import React from 'react';

function Navbar() {
  return (
    <>
        <nav className=''>
            <div className=''>
                <p>Logo</p>
            </div>
            <div className=''>
              <a href="#" className=''>
                Seguimiento
              </a>
              <a href="#" className=''>
                Sucursal
              </a>
              <a href="#" className=''>
                Contacto
              </a>
            </div>
        </nav>
    </>
  );
}

export default Navbar;
