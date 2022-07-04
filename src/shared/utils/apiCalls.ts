import axios from "axios";
import { IProducto } from "../interfaces/producto.interface";
import { IRespuestaPuntos } from "../interfaces/respuestaPuntos.interface";
const baseURLapi = "http://localhost:8080/api/";

async function registrarUsuarioApiCall(
  correo: string,
  contrasena: string
): Promise<number> {
  const requestBody = { correo, contrasena };

  const resp = await axios.post(baseURLapi + "usuarios", requestBody);

  return resp.data.usuario_id;
}

async function ingresarUsuarioApiCall(
  correo: string,
  contrasena: string
): Promise<number> {
  const requestBody = { correo, contrasena };

  const resp = await axios({
    method: "post",
    url: baseURLapi + "usuarios-ingresar",
    data: requestBody,
  });

  return resp.data.idUsuario;
}

async function getTotalProductos(): Promise<number> {
  const resp = await axios.get(`${baseURLapi}productos-cantidad`);

  return resp.data.cantidadProductos;
}

async function getProductos(
  pagina: number,
  offset: number
): Promise<IProducto[]> {
  const resp = await axios.get(
    `${baseURLapi}productos-paginado/${pagina}/offset/${offset}`
  );

  return resp.data;
}

async function getPuntosUsuario(idUsuario: number): Promise<number> {
  const resp = await axios.get(`${baseURLapi}usuarios/${idUsuario}/puntos`);

  return resp.data.puntos;
}

async function updateAcumularPuntos(
  idUsuario: number,
  idProducto: number,
  cantidadProducto: number
): Promise<IRespuestaPuntos> {
  const resp = await axios.put(
    `${baseURLapi}usuarios/${idUsuario}/acumular-puntos`,
    {
      idProducto,
      cantidad: cantidadProducto,
    }
  );

  return resp.data;
}
async function updateRedimirPuntos(
  idUsuario: number,
  idProducto: number,
  cantidadProducto: number
): Promise<IRespuestaPuntos> {
  const resp = await axios.put(
    `${baseURLapi}usuarios/${idUsuario}/redimir-puntos`,
    {
      idProducto,
      cantidad: cantidadProducto,
    }
  );

  console.log("respuesta ", resp);
  return resp.data;
}

export {
  registrarUsuarioApiCall,
  ingresarUsuarioApiCall,
  getTotalProductos,
  getProductos,
  getPuntosUsuario,
  updateAcumularPuntos,
  updateRedimirPuntos,
};
