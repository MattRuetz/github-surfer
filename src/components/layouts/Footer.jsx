import React from 'react';
import './Footer.css';
import footerImg from '../../img/footer-img.svg';

function Footer() {
    const footerYear = new Date().getFullYear();

    return (
        <footer className="footer navbar-static-bottom">
            <div className="footer-container">
                <hr />
                <p className="footer__text">
                    © {footerYear} -
                    <a
                        rel="noreferrer"
                        href="https://github.com/MattRuetz"
                        target="_blank"
                    >
                        Matthew Ruetz
                    </a>
                </p>
                <small>
                    <a
                        href="https://www.flaticon.com/free-icons/error"
                        title="error icons"
                    >
                        Error icons created by juicy_fish - Flaticon
                    </a>
                </small>
            </div>
        </footer>
    );
}

export default Footer;
