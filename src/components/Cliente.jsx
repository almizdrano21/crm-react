import { useNavigate } from "react-router-dom";
const Cliente = ({ cliente }) => {
  const { nombre, empresa, email, telefono, id } = cliente;

  const navigate = useNavigate();

  return (
    <tr>
      <td className="text-center p-3">{nombre}</td>
      <td className="text-center p-3">{empresa}</td>
      <td className="text-center p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {telefono}
        </p>
      </td>
      <td className="text-center p-3">
        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase rounded-md"
          onClick={() => navigate(`/clientes/editar/${id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase mt-3 rounded-md"
          onClick={() => {
            `/clientes/eliminar/${id}`;
          }}
        >
          Eliminar
        </button>
        <button
          type="button"
          className="bg-yellow-400 hover:bg-yellow-500 block w-full text-white p-2 uppercase mt-3 rounded-md"
          onClick={() => {
            navigate(`/clientes/${id}`);
          }}
        >
          Ver
        </button>
      </td>
    </tr>
  );
};

export default Cliente;
