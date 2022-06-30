import { Button } from "@mui/material";
import React, { FC } from "react";
import styles from "./ProfileComponent.module.css";

interface ProfileComponentProps {}

const ProfileComponent: FC<ProfileComponentProps> = () => (
  <div className={styles.ProfileComponent}>
    <h4>Puntos: </h4>
    <Button variant="contained" className={styles.ProfileButton}>
      Ingresar
    </Button>
    <Button variant="contained" className={styles.ProfileButton}>
      Salir
    </Button>
  </div>
);

export default ProfileComponent;
