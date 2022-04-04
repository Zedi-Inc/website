import styles from "./styles.module.css";
import logo from "../assets/Zedi_Africa_logo.svg";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className="">
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.menus}>
        <ul className={styles.menu}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Create Team</a>
          </li>
        </ul>
        <div className="">
          <button>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
