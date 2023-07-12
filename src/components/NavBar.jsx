import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./media/2.png";
import "./styles/nav-bar.css";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [passed, setPassed] = useState(false);
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const [showLinks, setShowLinks] = useState(true);

  const handleShowLinks = () => {
    show ? setShow(false) : setShow(true);
  };
  useEffect(() => {
    if (window.location.pathname !== "/faq") {
      function handleScroll() {
        setScrollPosition(window.scrollY);
        if (window.scrollY > 180) {
          setPassed(true);
        } else {
          setPassed(false);
        }
      }

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  useEffect(() => {
    if (window.location.pathname !== "/faq") {
      setShowLinks(true);
    } else {
      setPassed(true);
      setShowLinks(false);
    }
  }, []);

  return (
    <div className="">
      <nav
        className={!passed ? "nav-bar transparent" : "nav-bar"}
        // style={{ backgroundColor: "#f0db4f" }}
      >
        <div className="container  flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={logo}
              //   style={{ width: "50px" }}
              className="h-24 mr-3 sm:h-16 rounded-md"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              {/* Obssesion */}
            </span>
          </a>
          <div className="flex md:order-2">
            <Link to={user ? `/profile/${user.id}` : "form"}>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {user ? "Mi Casillero" : "Ingresar"}
              </button>
            </Link>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={handleShowLinks}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={show ? "sub-menus" : "sub-menus-hidden"}
            id="navbar-sticky"
          >
            <ul className={!passed ? "transparent-link" : "nav-mns"}>
              <li>
                <Link to={"/"}>
                  <a
                    href="#"
                    className={!passed ? "link-txt" : "link-txt-passed"}
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              {showLinks && (
                <>
                  <li>
                    <a
                      href="#experiencias"
                      className={!passed ? "link-txt" : "link-txt-passed"}
                    >
                      Experiencias
                    </a>
                  </li>
                  <li>
                    <a
                      href="#sobre"
                      className={!passed ? "link-txt" : "link-txt-passed"}
                    >
                      Sobre mí
                    </a>
                  </li>
                  <Link to={`${user ? "/contact-form" : "/form"} `}>
                    <li>
                      <a
                        href="/"
                        className={!passed ? "link-txt" : "link-txt-passed"}
                      >
                        Contactame
                      </a>
                    </li>
                  </Link>
                  <Link to={"/faq"}>
                    <li>
                      <a
                        href="/"
                        className={!passed ? "link-txt" : "link-txt-passed"}
                      >
                        P.F.
                      </a>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
