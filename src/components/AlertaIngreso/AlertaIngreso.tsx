import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FilledInput,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { FC, useState } from "react";
import styles from "./AlertaIngreso.module.css";
import { isValidEmail } from "../../Utils/validateEmail";

type Props = {
  open: boolean;
  handleClose: Function;
};

interface State {
  email: string;
  password: string;
  showPassword: boolean;
  isInvalidEmail: boolean;
  isEmailDirty: boolean;
  isPasswordDirty: boolean;
}

const AlertaIngreso: FC<Props> = (props) => {
  const [values, setValues] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
    isInvalidEmail: false,
    isEmailDirty: false,
    isPasswordDirty: false,
  });

  const handleChangeEmail =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      const email = event.target.value;
      if (isValidEmail(email)) {
        setValues({
          ...values,
          email: event.target.value,
          isInvalidEmail: false,
          isEmailDirty: true,
        });
      } else {
        setValues({
          ...values,
          email: event.target.value,
          isInvalidEmail: true,
          isEmailDirty: true,
        });
      }
    };

  const handleChangePassword =
    () => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        password: event.target.value,
        isPasswordDirty: true,
      });
    };

  const handleOnClose = () => {
    setValues({
      email: "",
      password: "",
      showPassword: false,
      isInvalidEmail: false,
      isEmailDirty: false,
      isPasswordDirty: false,
    });
    props.handleClose();
  };

  return (
    <Dialog
      open={props.open}
      onClose={handleOnClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby=""
    >
      <DialogTitle id="alert-dialog-title" className={styles.dialogTitle}>
        {"¡Hola!"}
      </DialogTitle>
      <DialogContent className={styles.dialogContent}>
        <DialogContentText id="alert-dialog-description">
          Por favor ingresa tus datos para ingresar o registrarte
        </DialogContentText>
        <form className={styles.ingresarForm}>
          <TextField
            required
            error={values.isInvalidEmail || values.isEmailDirty}
            id="filled-basic"
            label="Correo eletrónico"
            variant="filled"
            className={styles.formTextField}
            onChange={handleChangeEmail()}
          />
          <FormControl
            required
            error={values.password === "" && values.isPasswordDirty}
            variant="filled"
            className={styles.formTextField}
          >
            <InputLabel htmlFor="filled-basic">Contraseña</InputLabel>
            <FilledInput
              id="filled-basic"
              type={values.showPassword ? "text" : "password"}
              onChange={handleChangePassword()}
            />
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions className={styles.dialogActions}>
        <Button className={styles.buttonDialog}>Ingresar</Button>
        <Button className={styles.buttonDialog}>Registrarme</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertaIngreso;
