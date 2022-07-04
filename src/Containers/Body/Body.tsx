import { Grid, Pagination } from "@mui/material";
import { FC, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { IProducto } from "../../shared/interfaces/producto.interface";
import { getProductos, getTotalProductos } from "../../shared/utils/apiCalls";
import styles from "./Body.module.css";

type BodyProps = {
  idUsuario: number;
  usuarioIngresado: boolean;
  acumularPuntosHandler: Function;
  redimirPuntosHandler: Function;
};

const Body: FC<BodyProps> = (props) => {
  const [totalResultados, setTotalResultados] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(9);
  const [productos, setProductos] = useState<IProducto[]>([]);

  const listaProductos = (listaProductos: IProducto[]) =>
    listaProductos.map((producto) => (
      <Grid item xs={4}>
        <ProductCard
          usuarioIngresado={props.usuarioIngresado}
          idProducto={producto.producto_id}
          nombreProducto={producto.nombre}
          precio={producto.precio}
          puntos={producto.puntos}
          acumularPuntosHandler={props.acumularPuntosHandler}
          redimirPuntosHandler={props.redimirPuntosHandler}
          idUsuario={props.idUsuario}
        />
      </Grid>
    ));

  //Handler para la paginación
  const changePageHandler = (_event: any, pPagina: number) => {
    setCurrentPage(pPagina);
  };

  useEffect(() => {
    const getProductosHandler = async () => {
      const totalProductos = await getTotalProductos();

      const respProductos = await getProductos(currentPage - 1, resultsPerPage);

      setProductos(respProductos);
      setTotalResultados(totalProductos);
    };

    getProductosHandler();
  }, [currentPage, resultsPerPage]);

  return (
    <div className={styles.mainContent}>
      <h1>Productos</h1>
      <Pagination
        page={currentPage}
        count={Math.ceil(totalResultados / resultsPerPage)}
        className={styles.pagination}
        variant="outlined"
        onChange={changePageHandler}
      />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        {listaProductos(productos)}
      </Grid>

      <Pagination
        page={currentPage}
        count={Math.ceil(totalResultados / resultsPerPage)}
        className={styles.pagination}
        variant="outlined"
        onChange={changePageHandler}
      />
    </div>
  );
};

export default Body;
