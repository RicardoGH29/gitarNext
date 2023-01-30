import Image from "next/image";
import Link from "next/link";
import styles from "../styles/blog.module.css";
import {formatDate} from "../utils/helpers";

export default function Post({post}) {
    const {titulo, contenido, imagen, url, publishedAt} = post;
    return (
        <article>
            <Image src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${titulo}`} width={600} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link legacyBehavior href={`/blog/${url}`}>
                    <a className={styles.enlace}>Leer mas</a>
                </Link>
            </div>
        </article>
    )

}