import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import AlertaSalida from "../AlertaSalida/AlertaSalida";
import styles from "./ProfileComponent.module.css";

interface ProfileComponentProps {}

const ProfileComponent: FC<ProfileComponentProps> = () => {
  const [openSalirDialog, setOpenSalirDialog] = useState(false);

  const handleClickOpenSalirDialog = () => {
    setOpenSalirDialog(true);
  };
  const handleClickCloseSalirDialog = () => {
    setOpenSalirDialog(false);
  };

  return (
    <div className={styles.ProfileComponent}>
      <h4>Puntos: </h4>
      <Button variant="contained" className={styles.ProfileButton}>
        Ingresar
      </Button>
      <Button
        variant="contained"
        className={styles.ProfileButton}
        onClick={handleClickOpenSalirDialog}
      >
        Salir
      </Button>
      <AlertaSalida
        open={openSalirDialog}
        handleClose={handleClickCloseSalirDialog}
      />
    </div>
  );
};

export default ProfileComponent;
