
import { Helmet } from "react-helmet-async";

interface Props {
  title: string;
  description: string;
  type: string;
  link?: string;
}
export const Seo = ({ title, description, type, link }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="shyar, shyartv, agencia, publicidad, marketing, comunicación, diseño,branding, fotografía, audiovisual, streaming, social media, producción."
      />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:creator" content={"Karla"} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={link} />
    </Helmet>
  );
};
