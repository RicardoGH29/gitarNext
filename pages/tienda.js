import Layout from "../components/layout";
import ListadoGuitarras from "../components/listadoGuitarras";
import {useEffect} from "react";
export default function Tienda() {
  useEffect(() => {
    console.log("Tienda");
    loadGuitarras().then(
        (guitarras) => {
            console.log(guitarras);
        }
    );
  });
  return (
    <Layout
      title={"E-commerce"}
      description={"E-commerce de guitarras, amplificadores y accesorios"}
    >
      <main className="contenedor">
        <h1 className='heading'>Nuestra coleccion</h1>
        <ListadoGuitarras



        />
      </main>
    </Layout>
  );
}

export async function loadGuitarras() {
  const res = await fetch("http://localhost:1337/api/guitarras?populate=imagen");
  console.log(res);
  const guitarras = await res.json();
  console.log(guitarras);
  return guitarras;
}
export async function getStaticProps() {
  loadGuitarras().then((guitarras) => {
    console.log(guitarras);
  }).catch((err) => {
    console.log("error",err);
  });
  return {
    props: {

    }
  }
}