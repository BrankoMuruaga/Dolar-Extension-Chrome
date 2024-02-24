import React, { useState, useEffect } from "react";
import { BsArrowRepeat } from "react-icons/bs";
import TargetDolar from "./targetDolar";
import { Button, Card, CardBody } from "@nextui-org/react";

function App() {
  const [cotizacionOficial, setCotizacionOficial] = useState({
    nombre: null,
    compra: null,
    venta: null,
  });
  const [cotizacionBlue, setCotizacionBlue] = useState({
    compra: null,
    venta: null,
  });
  const [cotizacionBolsa, setCotizacionBolsa] = useState({
    compra: null,
    venta: null,
  });
  const [cotizacionContLiq, setCotizacionContLiq] = useState({
    compra: null,
    venta: null,
  });
  const [cotizacionMayorista, setCotizacionMayorista] = useState({
    compra: null,
    venta: null,
  });
  const [cotizacionCripto, setCotizacionCripto] = useState({
    compra: null,
    venta: null,
  });
  const [cotizacionTarjeta, setCotizacionTarjeta] = useState({
    compra: null,
    venta: null,
  });
  const [lastTime, setLastTime] = useState({ date: null, time: null });

  const obtenerCotizacion = () => {
    fetch("https://dolarapi.com/v1/dolares/")
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error al obtener la cotización del dólar blue: ${response.statusText}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setCotizacionOficial({
          nombre: data[0].nombre,
          compra: data[0].compra,
          venta: data[0].venta,
        });
        setCotizacionBlue({
          nombre: data[1].nombre,
          compra: data[1].compra,
          venta: data[1].venta,
        });
        setCotizacionBolsa({
          nombre: data[2].nombre,
          compra: data[2].compra,
          venta: data[2].venta,
        });
        setCotizacionContLiq({
          nombre: data[3].nombre,
          compra: data[3].compra,
          venta: data[3].venta,
        });
        setCotizacionMayorista({
          nombre: data[4].nombre,
          compra: data[4].compra,
          venta: data[4].venta,
        });
        setCotizacionCripto({
          nombre: data[5].nombre,
          compra: data[5].compra,
          venta: data[5].venta,
        });
        setCotizacionTarjeta({
          nombre: data[6].nombre,
          compra: data[6].compra,
          venta: data[6].venta,
        });
        const fechaActual = new Date();
        const formattedDate = `${fechaActual.getDate()}/${
          fechaActual.getMonth() + 1
        }/${fechaActual.getFullYear()}`;
        const horaActual = fechaActual.toLocaleTimeString();
        setLastTime({ date: formattedDate, time: horaActual });
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  useEffect(() => {
    obtenerCotizacion();
    const intervalId = setInterval(obtenerCotizacion, 600000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <>
      <Card className="flex flex-col font-display bg-slate-100 text-green-700 w-96 h-2/4">
        <h1 className=" flex text-2xl justify-center mt-2">Precio del Dólar</h1>
        <section className="flex text-xs text-slate-500 justify-center items-center justify-around">
          <p>Última actualización: {lastTime.date + " " + lastTime.time}</p>
          <Button
            onClick={obtenerCotizacion}
            isIconOnly
            color="success"
            radius="full"
            className="text-white"
          >
            <BsArrowRepeat size={20} />
          </Button>
        </section>
        <CardBody className="flex flex-col text-xm">
          <TargetDolar
            Principal
            DolarType={cotizacionBlue.nombre}
            priceCompra={cotizacionBlue.compra}
            priceVenta={cotizacionBlue.venta}
          />
          <CardBody className="">
            <TargetDolar
              DolarType={cotizacionOficial.nombre}
              priceCompra={cotizacionOficial.compra}
              priceVenta={cotizacionOficial.venta}
            />
            <TargetDolar
              DolarType={cotizacionBolsa.nombre}
              priceCompra={cotizacionBolsa.compra}
              priceVenta={cotizacionBolsa.venta}
            />
            <TargetDolar
              DolarType={cotizacionContLiq.nombre}
              priceCompra={cotizacionContLiq.compra}
              priceVenta={cotizacionContLiq.venta}
            />
            <TargetDolar
              DolarType={cotizacionMayorista.nombre}
              priceCompra={cotizacionMayorista.compra}
              priceVenta={cotizacionMayorista.venta}
            />
            <TargetDolar
              DolarType={cotizacionCripto.nombre}
              priceCompra={cotizacionCripto.compra}
              priceVenta={cotizacionCripto.venta}
            />
            <TargetDolar
              DolarType={cotizacionTarjeta.nombre}
              priceCompra={cotizacionTarjeta.compra}
              priceVenta={cotizacionTarjeta.venta}
            />
          </CardBody>
        </CardBody>
      </Card>
    </>
  );
}

export default App;
