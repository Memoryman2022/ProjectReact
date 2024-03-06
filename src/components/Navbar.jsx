import Logo from "../assets/Logo.png";

export default function Navbar() {
	return (
		<div className="navbar">
			<img className="logo" src={Logo} alt="image-logo" />
			<ul className="list">
				<li>home</li>
				<li>menu</li>
				<li>contact</li>
			</ul>
		</div>
	);
}
