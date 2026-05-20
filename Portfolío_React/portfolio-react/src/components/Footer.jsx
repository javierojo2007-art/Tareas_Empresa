import {
    FaGithub,
    FaInstagram,
    FaTwitter
} from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <p>
                © 2026 - Portfolio React
            </p>
            <div className="redes-sociales">
                <a href="https://github.com/" target="_blank">
                    <FaGithub />
                </a>
                <a href="https://instagram.com/" target="_blank">
                    <FaInstagram />
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <FaTwitter />
                </a>
            </div>
        </footer>
    );
}

export default Footer;