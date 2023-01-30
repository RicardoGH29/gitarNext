import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css";
import Post from "../components/post";
export default function Home({ guitarras, post }) {
  console.log(guitarras);
  console.log(post);
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Blog de musica, venta de guitarras y mas"}
      >
        <main className="contenedor">
          <h1 className="heading">Nuestra coleccion</h1>
          <div className={styles.grid}>
            {guitarras?.map((guitarra) => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))}
          </div>
        </main>

        <section className="contenedor">
          <h1 className="heading">Blog</h1>
          <div className={styles.grid}>
            {post?.map((post) => (
              <Post key={post.id} post={post.attributes} />
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`;
  const [resGuitarras, resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
  ]);
  const [{ data: guitarras }, { data: post }] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
  ]);
  return {
    props: {
      guitarras,
      post,
    },
  };
}
