import MenuItem from "./menu-item/MenuItem";
import { menu } from "./menu.data";

import styles from './Menu.module.scss'

const Menu = () => {
  return (
    <nav>
      <ul className={styles.menu}>
        {menu.map(item => <MenuItem key={item.link} item={item} />)}
      </ul>
    </nav>
  );
};

export default Menu;
