import React, { useEffect, useState } from "react";

const TableOrdenes = () => {
  const [ordenes, setOrdenes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [ordenSeleccionada, setOrdenSeleccionada] = useState(null);

  const obtenerOrdenes = async () => {
    try {
      const response = await fetch("https://my-json-server.typicode.com/tih4r3-chan/Despacho/Ventas");
      const data = await response.json();
      setOrdenes(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  useEffect(() => {
    obtenerOrdenes();
  }, []);

  const handleAbrirModal = (orden) => {
    setOrdenSeleccionada(orden);
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
                  <th className="pr-10">Dirección</th>
                  <th className="pr-10">Fecha de compra</th>
                  <th className="pr-10">Valor total</th>
                  <th className="pr-10"></th>
                </tr>
              </thead>
              <tbody>
                {ordenes.map((orden) => (
                  <tr key={orden.id}>
                    <td className="pr-10 py-10 items-center">{orden.id}</td>
                    <td className="pr-10 py-10 items-center">{orden.direccion_compra}</td>
                    <td className="pr-10 py-10 items-center">{orden.fecha_compra}</td>
                    <td className="pr-10 py-10 items-center">${orden.valor_compra}</td>
                    <td>
                      <button
                        onClick={() => handleAbrirModal(orden)}
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
      {/* Modal logic here */}
      {openModal && (
        <Modal onClose={() => setOpenModal(false)} open={openModal}>
          {ordenSeleccionada && (
            <FormDespacho orden={ordenSeleccionada} onClose={() => setOpenModal(false)} />
          )}
        </Modal>
      )}
    </>
  );
};

export default TableOrdenes;
