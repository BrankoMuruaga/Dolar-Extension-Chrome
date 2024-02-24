import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import React from "react";

function TargetDolar({
  Principal = false,
  DolarType,
  priceCompra,
  priceVenta,
}) {
  return (
    <Card
      className={`${Principal ? "h-full p-3" : "h-3/6"} mt-1 text-green-800`}
    >
      <CardHeader
        className={`${
          Principal ? "text-2xl mb-3" : "text-base"
        } flex items-center justify-center p-0`}
      >
        <h2>{DolarType}</h2>
      </CardHeader>
      <Divider />
      <CardBody className={`flex flex-row justify-around text-xm`}>
        <h3 className={`${Principal ? "text-xl" : "text-base"}`}>
          <span className="text-slate-500">Compra: </span>${priceCompra}
        </h3>
        <h3 className={`${Principal ? "text-xl" : "text-base"}`}>
          <span className="text-slate-500">Venta: </span> ${priceVenta}
        </h3>
      </CardBody>
    </Card>
  );
}

export default TargetDolar;
