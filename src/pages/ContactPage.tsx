import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import banner_contact from "../assets/contact/contacto-prensa-banner.webp";
import { Seo } from "../components/Seo";

export const ContactPage = () => {
  return (
    <MainLayout banner={banner_contact} title="Contactos">
      <Seo
        title="Contactos | Agencia de Publicidad, Marketing y Comunicación"
        description="Ecuador, Imbabura, Otavalo, Roque Egas entre José M. Troya y Cesar Guerra Dávila (Ciudadela Rumiñahui)"
        type="website"
        link="https://shyar.ec/contact"
      />
      <div>ContactPage</div>
    </MainLayout>
  );
};
