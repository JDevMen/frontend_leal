import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import styles from "./ProductCard.module.css";

interface ProductCardProps {}

const ProductCard: FC<ProductCardProps> = () => (
  <>
    <Card className={styles.ProductCard}>
      <CardContent className={styles.content}>
        <Typography variant="h5" component="div">
          Nombre producto
        </Typography>
        <div className={styles.body2_container}>
          <Typography variant="body2" className={styles.body2_card}>
            <b>Precio:</b> $1000
          </Typography>
          <Typography variant="body2" className={styles.body2_card}>
            <b>Puntos:</b> 1000
          </Typography>
        </div>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          className={styles.counter_group}
        >
          <Button>-</Button>
          <p className={styles.counter}>0</p>
          <Button>+</Button>
        </ButtonGroup>
      </CardContent>
      <CardActions className={styles.actions}>
        <Button
          variant="contained"
          size="small"
          className={styles.actions_button}
        >
          Comprar
        </Button>
        <Button
          variant="contained"
          size="small"
          className={styles.actions_button}
        >
          Redimir
        </Button>
      </CardActions>
    </Card>
  </>
);

export default ProductCard;
