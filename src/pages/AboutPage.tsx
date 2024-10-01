import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import backgroundImage from "../assets/about/EMPLEADOS.webp"; // Importar la imagen de fondo para otras páginas
import { Seo } from "../components/Seo";

export const AboutPage = () => {
  return (
    <MainLayout banner={backgroundImage} title="Nosotros">
      <Seo
        title="Nosotros | Agencia de Publicidad, Marketing y Comunicación"
        description="Es una Agencia de Publicidad, Marketing y Comunicación especializada en el área digital. Encaramos cada proyecto bajo nuestra propia metodología, brindando calidad en los procesos, investigación, estrategia y resultados."
        type="website"
        link="https://shyar.ec/about"
      />
      <div>AboutPage</div>
    </MainLayout>
  );
};
