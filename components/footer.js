import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";

// El código exporta una función llamada Footer que renderiza un componente de tipo footer. Esta función usa el hook useRouter para obtener información del router. Dentro del componente se encuentra un div con clase contenedor y contenido, además de un nav con clase navegación que contiene 4 enlaces a diferentes páginas. Finalmente hay un párrafo con clase copy que muestra el año actual como derechos reservados.

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link legacyBehavior href="/">
            Inicio
          </Link>{" "}
          <Link legacyBehavior href="/nosotros">
            Nosotros
          </Link>{" "}
          <Link legacyBehavior href="/blog">
            Blog
          </Link>{" "}
          <Link legacyBehavior href="/tienda">
            Tienda
          </Link>
        </nav>
        <p className={styles.copy}>
          Todos los derechos reservados {new Date().getFullYear()},
        </p>
      </div>
    </footer>
  );
}
