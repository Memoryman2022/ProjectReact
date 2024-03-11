import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const OnlineRecipe = () => {
	const [recipeWeb, setRecipeWeb] = useState();
	const listRef = useRef();
	const [currentIndex, setCurrentIndex] = useState(0);

	async function getRandomRecipe() {
		try {
			const apiKey = "3acbe22873da44d0b4209473bc2d9c30";
			/*let resp = await axios.get(
				`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
			);*/
			console.log(resp);
			setRecipeWeb(resp.data.recipe);
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		getRandomRecipe();
	}, []);

	const scrollToImage = (direction) => {
		if (direction === "prev") {
			setCurrentIndex((curr) => {
				const isFirstSlide = currentIndex === 0;
				return isFirstSlide ? 0 : curr - 1;
			});
		} else if (direction === "next") {
			const isLastSlide = currentIndex === recipes.length - 1;
			if (!isLastSlide) {
				setCurrentIndex((curr) => curr + 1);
			}
		}
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	if (!recipeWeb) {
		return (
			<>
				<p>Loading...</p>
				<Link to="/">
					<button>BACK</button>
				</Link>
			</>
		);
	}

	return (
		<div className="main-container">
			<div className="slider-container">
				<div className="leftArrow" onClick={() => scrollToImage("prev")}>
					&#10092;
				</div>
				<div className="rightArrow" onClick={() => scrollToImage("next")}>
					&#10093;
				</div>
				<div className="container-images">
					<ul ref={listRef}>
						{recipeWeb &&
							recipeWeb.map((item) => {
								return (
									<li key={item.id}>
										<img src={item.image} width={500} height={280} />
										<h3>{item.title}</h3>
									</li>
								);
							})}
					</ul>
				</div>
				<div className="dots-container">
					{recipeWeb.map((_, idx) => (
						<div
							key={idx}
							className={`dot-container-item ${
								idx === currentIndex ? "active" : "inactive"
							}`}
							onClick={() => goToSlide(idx)}
						></div>
					))}
				</div>
			</div>
		</div>
	);
};
