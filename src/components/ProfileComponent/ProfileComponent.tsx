import { Button } from "@mui/material";
import { FC, useState } from "react";
import AlertaIngreso from "../AlertaIngreso/AlertaIngreso";
import AlertaSalida from "../AlertaSalida/AlertaSalida";
import styles from "./ProfileComponent.module.css";

interface ProfileComponentProps {
  idUsuario: number;
  puntosUsuario: number;
  usuarioIngresado: boolean;
  ingresarUsuario: Function;
  registrarUsuario: Function;
  salirUsuario: Function;
}

const ProfileComponent: FC<ProfileComponentProps> = (props) => {
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

  const handleSalirUsuario = () => {
    setOpenSalirDialog(false);

    props.salirUsuario();
  };

  return (
    <div className={styles.ProfileComponent}>
      {!props.usuarioIngresado && (
        <Button
          variant="contained"
          className={styles.ProfileButton}
          onClick={handleClickOpenIngresarDialog}
        >
          Ingresar
        </Button>
      )}
      {props.usuarioIngresado && (
        <>
          <h4>Puntos: {props.puntosUsuario} </h4>
          <Button
            variant="contained"
            className={styles.ProfileButton}
            onClick={handleClickOpenSalirDialog}
          >
            Salir
          </Button>
        </>
      )}
      <AlertaIngreso
        open={openIngresarDialog}
        handleClose={handleClickCloseIngresarDialog}
        handleIngresarUsuario={props.ingresarUsuario}
        handleRegistrarUsuario={props.registrarUsuario}
      />
      <AlertaSalida
        open={openSalirDialog}
        handleClose={handleClickCloseSalirDialog}
        salirUsuario={handleSalirUsuario}
      />
    </div>
  );
};

export default ProfileComponent;
