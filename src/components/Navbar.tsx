import './Navbar.css';

import logo from '../assets/logo.png';

export default function Navbar() {
	return (
    <div className="Navbar">
      <div className="logo">
        <img src={logo} className="logo-img"/>
        <h1 className="logo-title">Basiclopedia</h1>
      </div>
		</div>
	);
}
