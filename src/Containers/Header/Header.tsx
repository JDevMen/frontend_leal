import React, { FC } from "react";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import styles from "./Header.module.css";
import LealLogo from "../../Assets/logo-leal-home.svg";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <header className={styles.Header}>
    <nav className={styles.navBar}>
      <img src={LealLogo} alt="logo leal" className={styles.navBarLogo} />
      <h3>Compra/Redime</h3>
      <ProfileComponent />
    </nav>
  </header>
);

export default Header;
