import { Grid, Pagination } from "@mui/material";
import React, { FC } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Body.module.css";

interface BodyProps {}

const Body: FC<BodyProps> = () => (
  <div className={styles.mainContent}>
    <h1>Productos</h1>
    <Pagination count={10} className={styles.pagination} variant="outlined" />
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
      <Grid item xs={4}>
        <ProductCard />
      </Grid>
    </Grid>

    <Pagination count={10} className={styles.pagination} variant="outlined" />
  </div>
);

export default Body;
