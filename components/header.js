import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Image src="/img/logo.svg" width={300} height={40} alt="imagen-logo" />
        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/blog">Guitarras</Link>
          <Link href="/tienda">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
