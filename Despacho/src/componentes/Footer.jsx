import React from 'react';

function Footer() {
  return (
<footer class="bg-teal-500 p-4 text-center fixed bottom-0 w-full">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center"> 
                  <img src="#" class="h-8 me-3" alt="logo" /> {/*logo */}
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Logo</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Condiciones servicio</h2>
                  <ul class="text-gray-800 dark:text-gray-800 font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Recomendaciones embalaje</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Cobertura</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Siguenos</h2>
                  <ul class="text-gray-800 dark:text-gray-800">
                      <li class="mb-4">
                          <a href="#" class="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul class="text-gray-800 dark:text-gray-800">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Condiciones de privacidad</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terminos &amp; Condiciones</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-800 dark:text-gray-800 sm:text-center">© 2024 <a href="#" class="hover:underline">aaaa™</a>. Todos los derechos reservados.
          </span>
      </div>
    </div>
</footer>

  );
}

export default Footer;
