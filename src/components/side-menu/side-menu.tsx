import { FC } from "react";
import IconByKey from "../icon-by-key";
import { IconName } from "../icon-by-key/icon-by-key.types";
import styles from "./side-menu.module.scss";
import { SideMenuProps } from "./side-menu.types";
import NavLink from "../nav-link";

const SideMenu: FC<SideMenuProps> = ({ items, className }) => {
  return (
    <nav className={`${styles.sideMenu} ${className || ""}`}>
      <ul className={styles.items}>
        {items.map((item, index) => (
          <li key={`side-menu-item-${index}`} className={styles.item}>
            <NavLink
              href={item.link}
              className={`${styles.link}`}
              activeClassName={styles.item__active}
            >
              <IconByKey icon={item.icon as IconName} className={styles.icon} />
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideMenu;
