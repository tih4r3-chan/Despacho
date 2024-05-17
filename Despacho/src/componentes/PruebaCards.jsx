import React from "react";
import { CardComponent } from "./CardComponent";

export const PruebaCards = () => {
  return (
    <div className="flex justify-center">
      <CardComponent
        title="Consultar Ordenes de compra"
        description="Revisa las últimas oc realizadas para generar su despacho"
        buttonText="Consultar"
      />
      <CardComponent
        title="Revisar Ordenes de despacho"
        description="Consulta los despachos realizados, modifica los registros de intentos o cierra la orden"
        buttonText="Consultar"
      />
      <CardComponent
        title="Sucursales"
        description="Conoce las agencia más cercanas"
        buttonText="Sucursales"
      />
    </div>
  );
};
