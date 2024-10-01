import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import banner_shyartv from "../assets/shyartv/tricaster-shyartv.webp"
import { Seo } from "../components/Seo";

export const ShyarTvPage = () => {
  return (
    <MainLayout banner={banner_shyartv} title="SHYAR TV">
      <Seo
        title="Shyar TV | Agencia de Publicidad, Marketing y Comunicación"
        description="Shyar TV es un medio de comunicación digital moderno, equipado con tecnología moderna."
        type="website"
      link="https://shyar.ec/shyartv"

      />
      <div>ShyarTvPage</div>
    </MainLayout>
  );
};
