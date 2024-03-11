import logoInstagram from "../assets/logoInstagram.png";
import logoTwitter from "../assets/logoTwitter.png";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<div className="footerContainer">
			<div>
				<a
					href="https://www.instagram.com/labuenacocina.ironhack?utm_source=qr&igsh=MW93dmc1dG0zemZ3OA=="
					target="_blank"
				>
					<img className="logo-footer" src={logoInstagram} alt="intagram" />
				</a>
				<a href="www.twitter.com" target="_blank">
					<img className="logo-footer" src={logoTwitter} alt="twitter" />
				</a>
			</div>
			<div className="footerInf">
				<h4>Developed by</h4>

				<p>
					Rob <span>https://github.com/Memoryman2022</span>
				</p>

				<p>
					Luis Felipe <span>https://github.com/unidrelyn</span>
				</p>
			</div>
			<Link to="/ContactForm">
				<p className="contact">contact</p>
			</Link>
		</div>
	);
}
