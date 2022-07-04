import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  idProducto?: number;
  nombreProducto?: string;
  precio?: number;
  puntos?: number;
  usuarioIngresado: boolean;
  acumularPuntosHandler: Function;
  redimirPuntosHandler: Function;
  idUsuario: number;
};

const ProductCard: FC<ProductCardProps> = (props) => {
  const [cantidadProducto, setCantidadProducto] = useState(0);

  const aumentarCantidadProductoHandler = () => {
    setCantidadProducto(cantidadProducto + 1);
  };

  const decrementarCantidadProductoHandler = () => {
    setCantidadProducto(cantidadProducto - 1);
  };

  const acumularPuntosHandler = async () => {
    await props.acumularPuntosHandler(
      props.idUsuario,
      props.idProducto,
      cantidadProducto
    );
  };
  const redimirPuntosHandler = () => {
    props.redimirPuntosHandler(
      props.idUsuario,
      props.idProducto,
      cantidadProducto
    );
  };

  return (
    <>
      <Card className={styles.ProductCard}>
        <CardContent className={styles.content}>
          <Typography variant="h5" component="div">
            {props.nombreProducto}
          </Typography>
          <div className={styles.body2_container}>
            <Typography variant="body2" className={styles.body2_card}>
              <b>Precio:</b> ${props.precio}
            </Typography>
            <Typography variant="body2" className={styles.body2_card}>
              <b>Puntos:</b> {props.puntos}
            </Typography>
          </div>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            className={styles.counter_group}
          >
            <Button
              disabled={!props.usuarioIngresado || cantidadProducto === 0}
              onClick={() => {
                decrementarCantidadProductoHandler();
              }}
            >
              -
            </Button>
            <p className={styles.counter}>{cantidadProducto}</p>
            <Button
              disabled={!props.usuarioIngresado}
              onClick={() => {
                aumentarCantidadProductoHandler();
              }}
            >
              +
            </Button>
          </ButtonGroup>
        </CardContent>
        <CardActions className={styles.actions}>
          <Button
            variant="contained"
            size="small"
            className={styles.actions_button}
            disabled={!props.usuarioIngresado || cantidadProducto === 0}
            onClick={() => acumularPuntosHandler()}
          >
            Comprar
          </Button>
          <Button
            variant="contained"
            size="small"
            className={styles.actions_button}
            disabled={!props.usuarioIngresado || cantidadProducto === 0}
            onClick={() => redimirPuntosHandler()}
          >
            Redimir
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

ProductCard.defaultProps = {
  idProducto: 0,
  nombreProducto: "Nombre producto",
  precio: 0,
  puntos: 0,
  usuarioIngresado: false,
};

export default ProductCard;
