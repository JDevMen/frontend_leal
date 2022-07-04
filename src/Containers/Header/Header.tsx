import React, { FC } from "react";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import styles from "./Header.module.css";
import LealLogo from "../../Assets/logo-leal-home.svg";

type HeaderProps = {
  idUsuario: number;
  puntosUsuario: number;
  usuarioIngresado: boolean;
  ingresarUsuario: Function;
  registrarUsuario: Function;
  salirUsuario: Function;
};

const Header: FC<HeaderProps> = (props) => (
  <header className={styles.Header}>
    <nav className={styles.navBar}>
      <img src={LealLogo} alt="logo leal" className={styles.navBarLogo} />
      <h3>Compra/Redime</h3>
      <ProfileComponent
        idUsuario={props.idUsuario}
        puntosUsuario={props.puntosUsuario}
        usuarioIngresado={props.usuarioIngresado}
        ingresarUsuario={props.ingresarUsuario}
        registrarUsuario={props.registrarUsuario}
        salirUsuario={props.salirUsuario}
      />
    </nav>
  </header>
);

export default Header;
