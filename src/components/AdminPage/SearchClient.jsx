import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../api";
import { Link } from "react-router-dom";

const SearchClient = () => {
  const [query, setQuery] = useState("");
  const [clients, setClients] = useState([]);
  const [results, setResults] = useState([]);
  const searching = (e) => {
    e.preventDefault();
    console.log(query);
    if (query.length > 0) {
      const filteredItems = clients.filter((item) => {
        return (
          item.nombre.toLowerCase().includes(query.toLowerCase()) ||
          item.apellido_p.toLowerCase().includes(query.toLowerCase())
        );
      });
      setResults(filteredItems);
      console.log(filteredItems);
    }
  };
  const getUsers = () => {
    axios
      .get(`${api}/clients`)
      .then((res) => {
        console.log(res);
        setClients(res.data.clients);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="text-center">
      <form className="max-w-lg mx-auto mt-5" onSubmit={searching}>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Buscar clientes por nombre o apellido..."
            required
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            onClick={searching}
            class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Buscar
          </button>
        </div>
      </form>
      {results.length > 0 && (
        <div className="mt-3">Resultados de busqueda:</div>
      )}
      {results.length > 0 &&
        results.map((item, i) => (
          <ol key={i} className="link link-info">
            <Link to={`client/${item.id}/`}>
              <li>{item.nombre}</li>
            </Link>
          </ol>
        ))}
    </div>
  );
};

export default SearchClient;
