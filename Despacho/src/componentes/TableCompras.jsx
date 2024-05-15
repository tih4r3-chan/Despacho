import { useState, useEffect } from "react";
import React from "react";
import { Modal } from "./Modal";
import { useForm } from "react-hook-form";

export const TableCompras = () => {
  const [ventas, setVentas] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const jsonData = {
      fecha_despacho: data.fechaDespacho,
      patente_camion: data.patenteCamion,
      intento: 0,
      entregado: false,
      id_compra: data.id_compra,
      direccion_compra: data.direccionEntrega,
      valor_compra: data.valorCompra,
    };

    const response = await fetch("http://127.0.0.1:8000/despachos/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    });
    if (response.ok) {
      // La solicitud fue exitosa (código de respuesta en el rango 200-299)
      console.log("Solicitud exitosa");
      // Aquí puedes hacer algo, como redirigir al usuario a otra página o mostrar un mensaje de éxito
    } else {
      // La solicitud no fue exitosa (código de respuesta fuera del rango 200-299)
      console.log("Error en la solicitud:", response.status);
      // Aquí puedes manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

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

  //state que controla el modal
  const [openModal, setOpenModal] = useState(false);

  //state que abre el modal junto con la data del id seleccionado
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
                        className="py-1 bg-orange-200 px-8 rounded-xl shadow-md hover:bg-orange-300/70 transition-all duration-300 "
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
            onSubmit={handleSubmit(onSubmit)}
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
                {...register("fechaDespacho", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">Patente de camión</label>
              <input
                type="text"
                placeholder="Elige patente de camión"
                className="border border-gray-300 rounded-lg block w-full p-1"
                {...register("patenteCamion", { required: true })}
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
                {...register("id_compra", { required: true })}
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
                {...register("direccionEntrega", { required: true })}
              />
            </div>
            <div className="mb-5">
              <label className="block font-bold mb-2">Valor de compra</label>
              <input
                type="number"
                value={ventaSeleccionada ? ventaSeleccionada.valor_compra : ""}
                className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
                disabled={true}
                {...register("valorCompra", { required: true })}
              />
            </div>

            <button
              className="py-6 px-14 rounded-lg bg-teal-600 text-white font-bold mb-14"
              type="submit"
            >
              Asignar despacho
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};
