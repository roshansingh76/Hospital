import React from 'react';
import { Link } from 'react-router-dom';

const Topnavbar = () => (
		<Tobbar/>		
		
);
const Tobbar=()=>(
	
		<div className="top d-none d-sm-block">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-sm-12 mobile-center">
						<div className="email"><a href="#"><span><i className="fa fa-envelope-o"></i> info@Jyotirvid.in</span></a></div>
						<div className="email"><a href="https://rgyan.com/horoscope/" target="_blank"><span>Free Match Making</span></a></div>
					</div>
					<div className="col-lg-6 col-sm-12 mobile-center">
						<div className="wrap-top">
							<ul className="flat-top social-links">
								<li><a href="https://www.facebook.com/jyotirvid2017/" className="facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
								
								<li><a href="https://twitter.com/Jyotirvid2018" className="twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
								<li><a href="https://in.pinterest.com/jyotirvid2018/" className="pinterest" target="_blank"><i className="fa fa-pinterest"></i></a></li>
								{/*<li><a href="#" className="blog"><i className="fa fa-rss"></i></a></li>*/}
							</ul>
							{/*<div className="flat-top flat-language">
								<ul className="unstyled">
									<li><a href="sign-in.html">Login</a></li>
									<li><a href="register.html">Register</a></li>
								</ul>
							</div>*/}
						</div>
					</div>
				</div>
			</div>
		</div>

)

export default Topnavbar;