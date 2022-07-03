import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { FC } from "react";
import styles from "./AlertaSalida.module.css";

type Props = {
  open: boolean;
  handleClose: any;
};

const AlertaSalida: FC<Props> = (props) => {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title" className={styles.dialogTitle}>
        {"¿Está seguro de salir?"}
      </DialogTitle>
      <DialogActions className={styles.dialogActions}>
        <Button className={styles.buttonDialog} onClick={props.handleClose}>
          Confirmar
        </Button>
        <Button className={styles.buttonDialog} onClick={props.handleClose}>
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertaSalida;
