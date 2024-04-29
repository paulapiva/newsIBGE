import { useContext, useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { NewsContext } from "../../context/Context";
import { Link } from "react-router-dom";
import { TimeSince} from '../../utils/TimeSince'
import { NewsItem } from "../../utils/types";
import favoriteWIcon from '../../assets/whiteHeartIcon.svg';
import favoriteBIcon from '../../assets/blackHeartIcon.svg';
import { Destak, Div, Div2, Title } from "../../styles/globalStyles";

function Home() {
  const { news, setNews } = useContext(NewsContext);
  const [favorites, setFavorites] = useState<NewsItem[]>([]);
  const latestNews = news.length > 0 ? news[0] : null;
  const otherNews = news.length > 1 ? news.slice(1) : [];

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteNews') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleFavorite = (selectedNews: NewsItem) => {
    let updatedFavorites;
     if (favorites.some(favorite => favorite.id === selectedNews.id)) {
      updatedFavorites = favorites.filter(favorite => favorite.id !== selectedNews.id);
    } else {
      updatedFavorites = [...favorites, selectedNews];
    }
    localStorage.setItem('favoriteNews', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <>
      <Header />
          {latestNews && (
      <Destak className="latest-news">
            <>
            <Link to={latestNews.link}>
                <div key={latestNews.id}>
                  <Title>{latestNews.titulo}</Title>
                  <p>{latestNews.introducao}</p>
                  <p>Publicado há {TimeSince(latestNews.data_publicacao)}</p>
                </div>
          </Link>
          <button
            type="button"
            onClick={() => handleFavorite(latestNews)}
            >
            <img
              data-testid="favorite-btn"
              src={favorites.some(fav => fav.id === latestNews.id) ? favoriteBIcon : favoriteWIcon}
              alt={favorites.some(fav => fav.id === latestNews.id) ? 'Desfavoritar' : 'Favoritar'}
              />
          </button>
          </>
        </Destak>
        )}
          {otherNews.map((item) => (
        <Div className="news-list">
            <>
            <Link to={item.link} key={item.id} >
          <div>
            <Title>{item.titulo}</Title>
            <p>{item.introducao}</p>
            <p>Publicado há {TimeSince(item.data_publicacao)}</p>
          </div>
          </Link>
          <button
            type="button"
            onClick={() => handleFavorite(item)}
          >
            <img
              data-testid="favorite-btn"
              src={favorites.some(fav => fav.id === item.id) ? favoriteBIcon : favoriteWIcon}
              alt={favorites.some(fav => fav.id === item.id) ? 'Desfavoritar' : 'Favoritar'}
            />
          </button>
          </>
        </Div>
        ))}
      <Footer />
    </>
  )
}

export default Home;
