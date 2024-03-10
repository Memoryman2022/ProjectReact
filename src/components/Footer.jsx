import { useEffect, useState } from "react";
import axios from "axios";

import logoInstagram from "../assets/logoInstagram.png";
import logoTwitter from "../assets/logoTwitter.png";

export default function Footer() {
	const [recipeWeb, setRecipeWeb] = useState();

	async function getRandomRecipe() {
		try {
			const apiKey = "3acbe22873da44d0b4209473bc2d9c30";
			let resp = await axios.get(
				` https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`
			);

			setRecipeWeb(resp.dara.recipe[0]);
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		getRandomRecipe();
	});

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
			<div>contact</div>
		</div>
	);
}
