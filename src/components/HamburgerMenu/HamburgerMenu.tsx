import styles from './HamburgerMenu.module.scss';
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { MouseEventHandler } from 'react';

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const HamburgerMenu = ({isOpen, onClick}: HamburgerMenuProps) => {
  console.log(isOpen)
  return (
    <div onClick={onClick}>
        { isOpen ? (
        <VscMenu className={styles.hamburger}/> )
          : (
        <VscChromeClose className={styles.hamburger}/>)
          }
    </div>
) }

  
