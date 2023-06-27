/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
// eslint-disable-next-line import/no-unresolved
import logo from 'img/logo.png';
import classes from './Header.module.css';

// eslint-disable-next-line camelcase
import Header__Search from '../Header__Search/Header__Search';
import Header__Sidebar from '../Header__Sidebar/Header__Sidebar';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logoContainer}>
        <img className={classes.logo} src={logo} />
      </div>
      <Header__Search />
      <Header__Sidebar />
    </header>
  );
}

export default Header;
