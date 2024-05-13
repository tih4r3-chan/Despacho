import { useState, useEffect } from "react";
import React from "react";
import { Modal } from "./Modal";

export const TableCompras = () => {
  const [ventas, setVentas] = useState([]);

  const compras = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/tih4r3-chan/Despacho/Ventas"
    );
    const data = await response.json();
    console.log(data);
    setVentas(data);
  };
  // Llamada a la función para obtener los datos cuando el componente se monta
  useEffect(() => {
    compras();
  }, []);

  const [openModal, setOpenModal] = useState(false);

  const [ventaSeleccionada, setVentaSeleccionada] = useState(null);
  const handleAbrirModal = (venta) => {
    setVentaSeleccionada(venta);
    setOpenModal(true);
  };

  return (
    <>
      <section className="grid text-center grid-cols-12 mb-8">
        <div className="col-span-12 flex justify-center">
          <div className="col-span-10 p-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-white h-full overflow-hidden">
            <table className="table-fixed">
              <thead>
                <tr className="py-10">
                  <th className="pr-10">Orden de compra</th>
                  <th className="pr-10">direccion</th>
                  <th className="pr-10">fecha de compra</th>
                  <th className="pr-10">valor total</th>
                  <th className="pr-10"></th>
                </tr>
              </thead>
              <tbody>
                {ventas.map((venta) => (
                  <tr key={venta.id}>
                    <td className="pr-10 py-10 items-center">{venta.id}</td>
                    <td className="pr-10 py-10  items-center">
                      {venta.direccion_compra}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      {venta.fecha_compra}
                    </td>
                    <td className="pr-10 py-10  items-center">
                      ${venta.valor_compra}
                    </td>
                    <td>
                      <button
                        onClick={() => handleAbrirModal(venta)}
                        className="py-1 bg-orange-200 px-8 rounded-xl shadow-md hover:bg-orange-300/70 transition-all duration-300"
                      >
                        Generar Despacho
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Modal
        onClose={() => {
          setOpenModal(false);
        }}
        open={openModal}
      >
        <div className="">
          <form
            action="POST"
            className="flex flex-col justify-center text-center px-24 text-xl"
          >
            <div className="mx-auto text-3xl font-bold mb-10 text-teal-600">
              Ingreso de orden de despacho
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">Fecha de despacho</label>
              <input
                type="date"
                placeholder="Ingresa fecha de despacho"
                className="border border-gray-300 rounded-lg block w-full p-1"
              />
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">Patente de camión</label>
              <input
                type="text"
                placeholder="Elige patente de camión"
                className="border border-gray-300 rounded-lg block w-full p-1"
              />
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">Intento de entrega</label>
              <input
                type="number"
                className="border border-gray-300 rounded-lg block w-full p-1"
              />
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">
                Orden de compra asociado
              </label>
              <input
                type="number"
                disabled={true}
                value={ventaSeleccionada ? ventaSeleccionada.id : ""}
                className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
              />
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">
                Dirección de entrega
              </label>
              <input
                type="text"
                disabled={true}
                value={
                  ventaSeleccionada ? ventaSeleccionada.direccion_compra : ""
                }
                className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
              />
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">Valor de compra</label>
              <input
                type="number"
                value={ventaSeleccionada ? ventaSeleccionada.valor_compra : ""}
                className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
                disabled={true}
              />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};
