import React from "react";

export const TableCompras = () => {
  return (
    <>
      <section className="grid text-center grid-cols-12 mb-[323px]">
        <div className="col-span-12 flex justify-center">
          <div className="col-span-10 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-full overflow-hidden">
            <table className="table-fixed">
              <thead>
                <tr>
                  <th className="pr-10">n° de compra</th>
                  <th className="pr-10">direccion</th>
                  <th className="pr-10">fecha de compra</th>
                  <th className="pr-10">valor total</th>
                  <th className="pr-10">Intento de despachos</th>
                  <th className="pr-10">Entregado</th>
                  <th className="pr-10">Cerrado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pr-10">1</td>
                  <td className="pr-10">Avenida siempre viva 69</td>
                  <td className="pr-10">09-04-2024</td>
                  <td className="pr-10">$10.990</td>
                  <td className="pr-10">2</td>
                  <td className="pr-10">No</td>
                  <td className="pr-10">No</td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center mt-4">
              <button className="py-1 bg-orange-200 px-8 rounded-xl shadow-md hover:bg-orange-300/70 transition-all duration-300">
                Editar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
