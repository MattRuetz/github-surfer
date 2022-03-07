import React from 'react';
import footerImg from '../../img/footer-img.svg';

function Footer() {
    const footerYear = new Date().getFullYear();

    return (
        <footer className="footer p-10 bg-gray-700 text-primary-content footer-center">
            <div>
                <img
                    src={footerImg}
                    alt="SVG"
                    style={{
                        width: '150px',
                        height: 'auto',
                    }}
                />
                <p>Copyright &copy; {footerYear}</p>
            </div>

            <small>
                <a
                    href="https://www.flaticon.com/free-icons/error"
                    title="error icons"
                >
                    Error icons created by juicy_fish - Flaticon
                </a>
            </small>
        </footer>
    );
}

export default Footer;
