import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import banner_service from "../assets/service/servicios_de_marketing_digital.jpg";
import { Seo } from "../components/Seo";

export const ServicePage = () => {
  return (
    <MainLayout banner={banner_service} title="Servicios">
      <Seo
        title="Servicios | Agencia de Publicidad, Marketing y Comunicación"
        description="Planificación organizacional y logística, Marketing Digital y estrategia de Branding,Diseño Gráfico, Diseño y Programación Web, Social Media Marketing, Fotografía, Producción Audiovisual y Streaming, Comunicación Social,"
        type="website"
      link="https://shyar.ec/services"

      />
      <div>ServicePage</div>
    </MainLayout>
  );
};
