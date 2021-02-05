import React from 'react';

const Footer = (props) => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-4 offset-1 col-sm-2">
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li><a href="/home">Home</a></li>
						</ul>
					</div>
					<div className="col-8 col-sm-8">
						<h5>Address</h5>
						<address>
							Lima, Perú<br />
							<i className="fa fa-phone fa-lg"></i> Contact Phone: +51 989976691<br />
							<i className="fa fa-envelope fa-lg"></i> Email: <a href="mailto:favm72@gmail.com">favm72@gmail.com</a>
						</address>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-auto">
						<p>© Copyright 2021 Company</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
