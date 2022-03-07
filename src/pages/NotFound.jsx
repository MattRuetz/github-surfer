import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Terminal from '../img/terminal-1.svg';

function NotFound() {
    return (
        <div className="hero">
            <div className="text-center hero-content flex flex-col justify-center h-screen">
                <img src={Terminal} alt="SVG" />
                <h1 className="text-7xl mb-8">
                    <strong className="text-9xl" id="404">
                        404
                    </strong>{' '}
                    - Page Not Found!
                </h1>
                <br />
                <Link to="/" className="btn btn-primary btn-lg">
                    <FaHome className="mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
