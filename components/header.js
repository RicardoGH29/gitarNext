import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  const router = useRouter();
  console.log(router);
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image src="/img/logo.svg" width={300} height={40} alt="imagen-logo" />
        <nav className={styles.navegacion}>
          <Link legacyBehavior href="/">
            <a className={router?.pathname === "/" ? styles.active : ""}>
              Inicio
            </a>
          </Link>
          <Link legacyBehavior href="/nosotros">
            <a
              className={router?.pathname === "/nosotros" ? styles.active : ""}
            >
              Nosotros
            </a>
          </Link>
          <Link legacyBehavior href="/tienda">
            <a className={router?.pathname === "/tienda" ? styles.active : ""}>
              Tienda
            </a>
          </Link>
          <Link legacyBehavior href="/blog">
            <a className={router?.pathname === "/blog" ? styles.active : ""}>
              Blog
            </a>
          </Link>

        </nav>
      </div>
    </header>
  );
}
