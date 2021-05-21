import * as React from 'react';
import { Link } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css';

const Layout = (props) => {
  return (
    <main className={container}>
      <title>{props.pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
      <h1 className={heading}>{props.pageTitle}</h1>
      {props.children}
    </main>
  );
}

export default Layout;