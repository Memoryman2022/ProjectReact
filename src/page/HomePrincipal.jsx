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
      <img className="main-image" src="../../images/main.png" />
      <p className="textHome">
        At "La Buena Comida" you will find recipes to delight and tantalise your
        tastebuds! We host a cornucopia of dishes, so you can discover the joy
        of cooking no matter your skill level. We also provide you with the
        opportunity share your own unique recipes with our ever growing
        community!
      </p>
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
    </>
  );
};
