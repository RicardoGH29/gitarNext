import Layout from "../components/layout";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css";
export default function Tienda({ guitarras }) {
  return (
    <Layout
      title={"E-commerce"}
      description={"E-commerce de guitarras, amplificadores y accesorios"}
    >
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <div className={styles?.grid}>
        {
          guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))
        }
        </div>
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(
//     `${process.env.API_URL}/guitarras?populate=imagen`
//   );
//   const { data: guitarras } = await res.json();
//   return {
//     props: {
//       guitarras,
//     },
//   };
// }

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const { data: guitarras } = await res.json();
  return {
    props: {
      guitarras,
    },
  };
}
