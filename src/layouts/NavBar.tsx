import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Importar Link y useLocation para saber la ruta actual
import vide from "../assets/video/Difusión Marketing ⧸ Producción Audiovisual.mp4";
import only_logo from "../assets/logo/only_logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

interface Props {
  banner?: string;
  title?: string;
  subtitle?: string;
}

export const NavBar = ({ banner, subtitle, title }: Props) => {
  const [nav, setNav] = useState(false);
  const location = useLocation(); // Obtener la ruta actual

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "INICIO", path: "/" },
    { id: 2, text: "NOSOTROS", path: "/about" },
    { id: 3, text: "SERVICIOS", path: "/services" },
    { id: 4, text: "CONTACTOS", path: "/contact" },
    { id: 5, text: "SHYAR TV", path: "/shyartv" },
  ];

  return (
    <div className="relative h-screen w-full">
      {/* Mostrar el video solo en la página de inicio */}
      {location.pathname === "/" ? (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={vide} type="video/mp4" />
          Tu navegador no soporta videos en HTML5.
        </video>
      ) : (
        /* Mostrar la imagen en las demás páginas */
        <img
          src={banner}
          alt="background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
      )}

      {/* Navbar con fondo blanco opaco y ancho completo */}
      <div
        className="bg-white/70 flex justify-between items-center h-24 w-full px-4 text-black z-20 fixed"
        style={{ justifyContent: !nav ? "space-between" : "flex-end" }}
      >
        {/* Logo visible en desktop y cuando el menú móvil está cerrado */}
        {!nav && (
          <img
            src={only_logo}
            alt="logo"
            className="w-20"
            style={{ marginLeft: "3%" }}
          />
        )}

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`relative group p-4 m-2 cursor-pointer duration-300 font-bold
                ${
                  location.pathname === item.path
                    ? "text-[#312782]"
                    : "hover:text-black"
                }`}
            >
              <Link to={item.path}>{item.text}</Link>
              {/* Subrayado degradado en hover y activo */}
              <span
                className={`absolute left-0 bottom-0 w-full h-1 
                bg-gradient-to-r from-[#312782] via-[#E3097E] to-[#F9D140] 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                ${location.pathname === item.path ? "opacity-100" : ""}`}
              ></span>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden z-30">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={`fixed md:hidden top-0 left-0 w-[60%] h-full bg-white/70 z-20 transition-transform duration-500 ease-in-out ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Mobile Logo */}
          <div className="flex items-center justify-center mt-6">
            <img src={only_logo} alt="logo" className="w-20" />
          </div>

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600 
                ${
                  location.pathname === item.path
                    ? "bg-[#00df9a] text-black"
                    : ""
                }`}
            >
              <Link to={item.path} onClick={handleNav}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contenido adicional */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold text-black">{title}</h1>
        <p className="mt-4 text-xl text-black">
          {subtitle}
          {/* Agencias de publicidad, marketing y comunicación */}
        </p>
      </div>
    </div>
  );
};
