import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
  const [cliente, setCliente] = new useState({});
  const { id } = useParams();
  const [cargando, setCargando] = new useState(false);
  useEffect(() => {
    setCargando(!cargando);
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteAPI();
  }, []);

  return (
    <div>
      {cargando ? (
        <Spinner />
      ) : Object.keys(cliente).length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <>
          <h1 className="font-black text-4xl text-blue-900">
            Ver cliente: {cliente.nombre}
          </h1>
          <p className="mt-3">Información del cliente</p>
          <p className="text-2xl text-gray-800 mt-10">
            <span className="uppercase font-bold text-gray-600">Cliente: </span>{" "}
            {cliente.nombre}
          </p>
          <p className="text-2xl text-gray-800 mt-4 ">
            <span className="uppercase font-bold text-gray-600">Email: </span>{" "}
            {cliente.email}
          </p>
          <p className="text-2xl text-gray-800 mt-4">
            <span className="uppercase font-bold text-gray-600">
              Telefono:{" "}
            </span>{" "}
            {cliente.telefono}
          </p>
          <p className="text-2xl text-gray-800 mt-4 text-gray-600">
            <span className="uppercase font-bold">Empresa: </span>{" "}
            {cliente.empresa}
          </p>
          <p className="text-2xl text-gray-800 mt-4 text-gray-600">
            <span className="uppercase font-bold">Notas: </span> {cliente.notas}
          </p>
        </>
      )}
    </div>
  );
};

export default VerCliente;
