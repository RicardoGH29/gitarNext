import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  const router = useRouter();
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link legacyBehavior href="/">
            Inicio
          </Link>
          <Link legacyBehavior href="/nosotros">
            Nosotros
          </Link>
          <Link legacyBehavior href="/blog">
            Blog
          </Link>
          <Link legacyBehavior href="/tienda">
            Tienda
          </Link>
        </nav>
        <p className={styles.copy}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
