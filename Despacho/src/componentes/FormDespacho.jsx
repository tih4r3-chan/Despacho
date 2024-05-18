import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios"; // Importar Axios

export const FormDespacho = ({ venta, onClose }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log("onSubmit ejecutado");
    const jsonData = {
      fecha_despacho: data.fecha_despacho,
      patente_camion: data.patente_camion,
      intento: 0,
      entregado: false,
      id_compra: venta.id,
      direccion_compra: venta.direccion_compra,
      valor_compra: venta.valor_compra,
    };

    console.log("Datos del formulario:", jsonData);

    try {
      const response = await axios.post(
        "http://44.205.221.190:8000/despachos/",
        jsonData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // La solicitud fue exitosa
        console.log("Solicitud exitosa");
        onClose(); // Cerrar el modal después de enviar el formulario
      } else {
        // Manejar errores
        console.log("Error en la solicitud:", response.status);
      }
    } catch (error) {
      // Manejar errores de red u otros errores
      console.error("Error en la solicitud:", error);
    }
  };
  return (
    <>
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
            {...register("fecha_despacho", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Patente de camión</label>
          <input
            type="text"
            placeholder="Elige patente de camión"
            className="border border-gray-300 rounded-lg block w-full p-1"
            {...register("patente_camion", { required: true })}
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">
            Orden de compra asociado
          </label>
          <input
            type="number"
            disabled={true}
            value={venta.id}
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Dirección de entrega</label>
          <input
            type="text"
            disabled={true}
            value={venta.direccion_compra}
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
          />
        </div>
        <div className="mb-5">
          <label className="block font-bold mb-2">Valor de compra</label>
          <input
            type="number"
            value={venta.valor_compra}
            className="border border-gray-300 rounded-lg block w-full text-slate-400 p-1"
            disabled={true}
          />
        </div>

        <button
          className="py-6 px-14 rounded-lg bg-teal-600 text-white font-bold mb-14"
          type="submit"
        >
          Asignar despacho
        </button>
      </form>
    </>
  );
};
