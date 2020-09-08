/* eslint-disable */
import React from 'react';
import '../styles/components/Header.styl';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from './Logo';

const Header = () => (
  <>
    <header>
      <nav>
        <figure>
          <Logo />
        </figure>
        <ul>
          <li>
            <a href="#">TECNOLOGY</a>
          </li>
          <li>
            <a href="#">IDEAS</a>
          </li>
          <li>
            <a href="#">LEADERSHIP</a>
          </li>
          <li>
            <a href="#">VIDEO</a>
          </li>
          <li>
            <a href="#">NEWS</a>
          </li>
          <li>
            <a href="#">FINANCE</a>
          </li>
          <li>
            <a href="#">ENTERTAIMENT</a>
          </li>
        </ul>
      </nav>
      <a className="burgerMenu" href="#">
        <AiOutlineMenu />
      </a>
    </header>
  </>
);

export default Header;
