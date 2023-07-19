import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Navbar.css';
//import mainLogo from '../icons/main logo.png'

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	return (
		<nav className="navbar">
			<Link to="/" className="nav-logo">
				<h1 style={{
					fontSize: '24px',
					fontWeight: 'bold',
					color: '#ebe5e1',
					textTransform: 'uppercase',
					fontFamily: 'Arial, sans-serif',
					letterSpacing: '2px',
					textShadow: '2px 2px 4px rgba(57, 43, 66, 0.3)',
					margin: '0',
					padding: '10px',
					//backgroundColor: '#f8f8f8',
					borderRadius: '8px',
					//boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
					//border: '1px solid #ccc',
				}}
				>BUYC</h1>
			</Link>
			<div onClick={handleClick} className="nav-icon">
				{open ? <FiX /> : <FiMenu />}
			</div>
			<ul className={open ? 'nav-links active' : 'nav-links'}>
				
					<li className="nav-item">
						<Link to={'/'} className="nav-link" onClick={closeMenu}>
							Home
						</Link>
					</li>
				
				
					<li className="nav-item">
						<Link to="/marketplace" className="nav-link" onClick={closeMenu}>
							Products
						</Link>
					</li>
				
				
					<li className="nav-item">
						<Link to="/login" className="nav-link" onClick={closeMenu}>
							Login
						</Link>
					</li>
				
			
					<li className="nav-item">
						<Link to="/contact" className="nav-link" onClick={closeMenu}>
							Contact
						</Link>
					</li>
				
				
					<li className="nav-item">
						<Link to="/login/dealer" className="nav-link" onClick={closeMenu}>
							Became A Dealer
						</Link>
					</li>
			
			</ul>
		</nav>
	);
};

export default Navbar;
