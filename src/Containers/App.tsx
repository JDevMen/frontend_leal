import "./App.css";
import Header from "./Header/Header";
import "./App.css";
import Body from "./Body/Body";
import { FC, useState } from "react";
import {
  getPuntosUsuario,
  ingresarUsuarioApiCall,
  registrarUsuarioApiCall,
  updateAcumularPuntos,
  updateRedimirPuntos,
} from "../shared/utils/apiCalls";
import CloseIcon from "@mui/icons-material/Close";
import { Alert, AlertTitle, Collapse, IconButton } from "@mui/material";

const App: FC = () => {
  const [idUsuario, setIdUsuario] = useState(0);
  const [usuarioIngresado, setUsuarioIngresado] = useState(false);
  const [puntosUsuario, setPuntosUsuario] = useState(0);
  const [openAlertSuccess, setOpenAlertSuccess] = useState(false);
  const [openAlertError, setOpenAlertError] = useState(false);

  async function ingresarUsuario(
    correo: string,
    contrasena: string
  ): Promise<void> {
    try {
      const idUsuario = await ingresarUsuarioApiCall(correo, contrasena);

      const puntos = await getPuntosUsuario(idUsuario);

      setUsuarioIngresado(true);
      setIdUsuario(idUsuario);

      setPuntosUsuario(puntos);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function registrarUsuario(
    correo: string,
    contrasena: string
  ): Promise<void> {
    try {
      const idUsuario = await registrarUsuarioApiCall(correo, contrasena);
      setIdUsuario(idUsuario);
      setUsuarioIngresado(true);
    } catch (error: any) {
      throw new Error(error);
    }
  }

  async function acumularPuntos(
    idUsuario: number,
    idProducto: number,
    cantidadProducto: number
  ): Promise<void> {
    try {
      const respuestaServidor = await updateAcumularPuntos(
        idUsuario,
        idProducto,
        cantidadProducto
      );

      setPuntosUsuario(respuestaServidor.nuevosPuntos);
      setOpenAlertSuccess(true);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async function redimirPuntos(
    idUsuario: number,
    idProducto: number,
    cantidadProducto: number
  ): Promise<void> {
    try {
      const respuestaServidor = await updateRedimirPuntos(
        idUsuario,
        idProducto,
        cantidadProducto
      );

      setPuntosUsuario(respuestaServidor.nuevosPuntos);
      setOpenAlertSuccess(true);
    } catch (err: any) {
      setOpenAlertError(true);
      throw new Error(err);
    }
  }

  function salirUsuario(): void {
    setIdUsuario(0);
    setPuntosUsuario(0);
    setUsuarioIngresado(false);
  }

  return (
    <div className="content">
      <Header
        idUsuario={idUsuario}
        puntosUsuario={puntosUsuario}
        usuarioIngresado={usuarioIngresado}
        ingresarUsuario={ingresarUsuario}
        registrarUsuario={registrarUsuario}
        salirUsuario={salirUsuario}
      />
      <Collapse in={openAlertSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlertSuccess(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Transacción exitosa</AlertTitle>
          La transacción del producto fue un éxito
        </Alert>
      </Collapse>
      <Collapse in={openAlertError}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlertError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Transacción fallida</AlertTitle>
          La transacción del producto falló
        </Alert>
      </Collapse>

      <Body
        idUsuario={idUsuario}
        usuarioIngresado={usuarioIngresado}
        acumularPuntosHandler={acumularPuntos}
        redimirPuntosHandler={redimirPuntos}
      />
    </div>
  );
};

export default App;
