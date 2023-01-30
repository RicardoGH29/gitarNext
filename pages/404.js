import Link from "next/link";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout title="Pagina no encontrada">
      <div className="contenedor">
        <h1 className="heading">Error 404</h1>
        <Link legacyBehavior href='/'>
            <a className="error-enlace">Ir a inicio</a>
        </Link>
        <p>Esta pagina no existe</p>
      </div>
    </Layout>
  );
}
