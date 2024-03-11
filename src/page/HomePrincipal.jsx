import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export const HomePrincipal = ({ recipeData, recipes, setRecipes }) => {
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const listNode = listRef.current;
    console.log(listRef.current);
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "auto",
      });
    }
  }, [currentIndex]);

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

  /*setTimeout(() => {
		console.log(currentIndex);
		currentIndex >= 17 ? setCurrentIndex(0) : scrollToImage("next");
	}, 1000);*/

  return (
    <>
      <h1>La Buena Comida</h1>
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
              {recipes &&
                recipes.map((item) => {
                  return (
                    <li key={item.id}>
                      <img
                        src={item.image}
                        width={500}
                        height={280}
                        alt={item.name}
                      />
                      <h3>{item.name}</h3>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="dots-container">
            {recipes.map((_, idx) => (
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
      <p className="textHome">
        In "La buena Cocina" you will find recipes to delight your palate. We
        have a wide variety of content, so you can find out how to make a lot of
        menus so you won't get bored. you can also save your own unique recipe
      </p>
      <Link to="/">
        <button>Create Recipe</button>
      </Link>
      <Link to="/">
        <button>All Recipe</button>
      </Link>
    </>
  );
};
