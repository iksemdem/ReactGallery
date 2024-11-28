import React, { useState } from "react";
import "./App.css";

// ================================================================
// === Wszystkie wymagania wypisane w zadaniu zostały spełnione ===
// ================================================================

function App() {
  const images = [
    {
      src: "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_3x2.jpg",
      description: "Taki piesek jakiś ciemny z białym pyszczkiem",
    },
    {
      src: "https://www.thesprucepets.com/thmb/y4YEErOurgco9QQO-zJ6Ld1yVkQ=/3000x0/filters:no_upscale():strip_icc()/english-dog-breeds-4788340-hero-14a64cf053ca40f78e5bd078b052d97f.jpg",
      description: "Tu taki fałdziak troche",
    },
    {
      src: "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg",
      description: "Tu wilczur",
    },
    {
      src: "https://m.media-amazon.com/images/I/81jQ6DwddDL._AC_UF1000,1000_QL80_.jpg",
      description: "Tu wielki czerwony pies",
    },
    {
      src: "https://alizoo.eu/img/ybc_blog/post/31.jpg",
      description: "tu włochacz co wygląda jakby przez ai był zrobiony",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleImageClick = () => {
    alert(images[currentIndex].description);
  };

  return (
    <div className="gallery">
      <div className="image-container">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].description}
          onClick={handleImageClick}
          className="image"
        />
      </div>
      <div className="buttons">
        <button onClick={goLeft} className="button">W lewo</button>
        <button onClick={goRight} className="button">W prawo</button>
      </div>
    </div>
  );
}

export default App;