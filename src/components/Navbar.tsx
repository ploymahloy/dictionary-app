import './Navbar.css';

import logo from '../assets/logo.png';

export default function Navbar() {
	return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} alt="..." className="logo-img"/>
        <h1 className="logo-title">Dictionary</h1>
      </div>
		</div>
	);
}

