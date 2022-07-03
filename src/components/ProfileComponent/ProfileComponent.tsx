import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import AlertaIngreso from "../AlertaIngreso/AlertaIngreso";
import AlertaSalida from "../AlertaSalida/AlertaSalida";
import styles from "./ProfileComponent.module.css";

interface ProfileComponentProps {}

const ProfileComponent: FC<ProfileComponentProps> = () => {
  const [openIngresarDialog, setOpenIngresarDialog] = useState(false);
  const [openSalirDialog, setOpenSalirDialog] = useState(false);

  const handleClickOpenIngresarDialog = () => {
    setOpenIngresarDialog(true);
  };
  const handleClickCloseIngresarDialog = () => {
    setOpenIngresarDialog(false);
  };

  const handleClickOpenSalirDialog = () => {
    setOpenSalirDialog(true);
  };
  const handleClickCloseSalirDialog = () => {
    setOpenSalirDialog(false);
  };

  return (
    <div className={styles.ProfileComponent}>
      <h4>Puntos: </h4>
      <Button
        variant="contained"
        className={styles.ProfileButton}
        onClick={handleClickOpenIngresarDialog}
      >
        Ingresar
      </Button>
      <Button
        variant="contained"
        className={styles.ProfileButton}
        onClick={handleClickOpenSalirDialog}
      >
        Salir
      </Button>
      <AlertaIngreso
        open={openIngresarDialog}
        handleClose={handleClickCloseIngresarDialog}
      />
      <AlertaSalida
        open={openSalirDialog}
        handleClose={handleClickCloseSalirDialog}
      />
    </div>
  );
};

export default ProfileComponent;
