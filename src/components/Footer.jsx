/* eslint-disable */
import React from 'react';
import '../styles/components/Footer.styl';
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { FaPinterestP } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => (
  <>
    <footer>
      <div className="footer__logo">
        <figure>
          <Logo />
        </figure>
        <p>©2018 deck</p>
        <p>Componets Based UI kits</p>
      </div>
      <div className="footer__sections">
        <div>
          <a href="#">TECHNOLOGY</a>
          <a href="#">IDEAS</a>
        </div>
        <div>
          <a href="#">LEADERDHIP</a>
          <a href="#">VIDEOS</a>
        </div>
        <div>
          <a href="#">NEWS</a>
          <a href="#">FINANCE</a>
        </div>
        <div>
          <a href="#">ENTERTEINAMENT</a>
        </div>
      </div>
      <div>
        <div className="footer__social-media">
          <p>Follow us:</p>
          <i>
            <AiOutlineInstagram />
          </i>
          <i>
            <AiFillFacebook />
          </i>
          <i>
            <FaPinterestP />
          </i>
          <i>
            <AiOutlineTwitter />
          </i>
        </div>
        <div>
          <form action="">
            <input
              className="footer__input"
              placeholder="YOUR EMAIL"
              type="text"
              name=""
              id=""
            />
            <button className="footer__button">SUSCRIBE</button>
          </form>
        </div>
      </div>
    </footer>
  </>
);
export default Footer;
