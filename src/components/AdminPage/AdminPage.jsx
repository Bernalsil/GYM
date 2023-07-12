import { useEffect, useState } from "react";
import FormExp from "./FormExp";
import SearchClient from "./SearchClient";
import { Link } from "react-router-dom";
import { api, server } from "../api";
import axios from "axios";
import bg from "../media/gymbg.jpg";
const AdminPage = () => {
  const [clients, setClients] = useState([]);
  const [component, setComponent] = useState("clients");
  const getClients = () => {
    axios
      .get(`${api}/clients`)
      .then((res) => {
        console.log(res.data);
        setClients(res.data.clients);
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getClients();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center  "
      style={{
        backgroundImage: `linear-gradient(rgba(4, 4, 4, 0.696), rgba(12, 12, 12, 0.77)), url(${bg})`,
      }}
    >
      <div className="max-w-lg mx-auto ">
        <h1 className="text-center text-white text-xl pt-10">Admin Panel</h1>
        <div className="flex gap-2 flex-wrap mt-4 justify-center">
          <div className="btn btn-sm" onClick={() => setComponent("exps")}>
            Agregar Experiencias
          </div>
          <Link to={`${server}/admin/api/prices/1/change/`}>
            <div className="btn btn-sm">Modificar precios</div>
          </Link>
          <div className="btn btn-sm" onClick={() => setComponent("search")}>
            Buscar cliente(s)
          </div>{" "}
          <div className="btn btn-sm" onClick={() => setComponent("clients")}>
            clientes
          </div>
        </div>
        <div>
          {(component === "exps" && <FormExp />) ||
            (component === "search" && <SearchClient />)}
        </div>
        {component === "clients" && (
          <div>
            <div className="overflow-x-auto mt-10">
              <table className="table table-zebra mx-auto text-center">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Email</th>
                    <th>Celular</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, i) => (
                    <tr key={i}>
                      <th>{i + 1}</th>
                      <td className="link link-info">
                        <Link to={`client/${client.id}/`}>{client.correo}</Link>
                      </td>

                      <td>{client.telefono}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
