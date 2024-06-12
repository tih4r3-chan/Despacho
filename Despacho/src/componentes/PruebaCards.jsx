import React, { useState } from "react";
import { CardComponent } from "./CardComponent";
import { TableCompras } from "./TableCompras";
import TableOrdenes from "./TableOrdenes";

export const PruebaCards = () => {
  const [tablaCompras, setTablaCompras] = useState(false);
  const [tablaOrdenes, setTablaOrdenes] = useState(false);

  return (
    <section>
      <div className="flex justify-center space-x-7">
        <CardComponent
          title="Consultar Ordenes de compra"
          description="Revisa las últimas oc realizadas para generar su despacho"
          buttonText="Consultar"
          onClick={() => {
            setTablaCompras(true);
            setTablaOrdenes(false);
          }}
        />
        <CardComponent
          title="Revisar Ordenes de despacho"
          description="Consulta los despachos realizados, modifica los registros de intentos o cierra la orden"
          buttonText="Consultar"
          onClick={() => {
            setTablaCompras(false);
            setTablaOrdenes(true);
          }}
        />
        <CardComponent
          title="Sucursales"
          description="Conoce las agencia más cercanas"
          buttonText="Sucursales"
        />
      </div>

      <section>
        {tablaOrdenes && <TableOrdenes/>}
      </section>
    </section>
  );
};