import { useEffect, useState } from "react";
import { Div, Title } from "../../styles/globalStyles";
import favoriteBIcon from '../../assets/blackHeartIcon.svg';
import { NewsItem } from "../../utils/types";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Favorite() {
  const [favorites, setFavorites] = useState<NewsItem[]>([]);

   useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleUnfavorite = (id: number | string) => {
    const updatedFavorites = favorites.filter(favorite => favorite.id !== Number(id));
    localStorage.setItem('favoriteNews', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <div>
    <Header />
      {favorites.length > 0 ? (
        favorites.map((newsItem) => (
          <Div key={newsItem.id}>
            <Title>{newsItem.titulo}</Title>
            <p>{newsItem.introducao}</p>
            <button
              type="button"
              onClick={() => handleUnfavorite(Number(newsItem.id))}
            >
              <img
                data-testid="unfavorite-btn"
                src={favoriteBIcon}
                alt="Desfavoritar"
              />
            </button>
          </Div>
        ))
      ) : (
        <p>Você não tem notícias favoritas.</p>
      )}
      <Footer />
    </div>
  )
}

export default Favorite;