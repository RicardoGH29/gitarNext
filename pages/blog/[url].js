import Layout from "../../components/layout";
import Image from "next/image";
import styles from "../../styles/blog.module.css";
import {formatDate} from "../../utils/helpers";

export default function Post({post}){
    console.log(post)
    const {titulo, contenido, imagen, publishedAt} = post.attributes;
    return (
        <Layout
        title={titulo}
        >
            <article className={`${styles.post} ${styles.mt3}`}>
                <Image src={imagen.data.attributes.formats.medium.url} alt={`imagen blog ${titulo}`} width={1000} height={600} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                    <p className={styles.resumen}>{contenido}</p>
                </div>
            </article>
        </Layout>
    )
}
export async function getServerSideProps({query: {url}}) {
    const res = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
    const { data: posts } = await res.json();
    return {
        props: {
            post: posts[0],
        },
    };
}