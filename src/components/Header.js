import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand } from 'reactstrap';

const Header = (props) => {
	return (
		<Fragment>			
			<Navbar dark fixed="top">
				<div className="container mybar">
					<NavbarBrand>Company</NavbarBrand>
					<NavLink to="/home">Home</NavLink>
					<NavLink to="/customers">Customers</NavLink>
					<NavLink to="/stores">Stores</NavLink>
				</div>
			</Navbar>
		</Fragment>
	);
}

export default Header
