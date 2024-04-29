import { useParams } from "react-router-dom";
import { Title } from "../../styles/globalStyles";
import { useContext } from "react";
import { NewsContext } from "../../context/Context";

function Details() {
  const { news, setNews } = useContext(NewsContext);
  const { id } = useParams();
  const newsItem = news.find(item => item.id.toString() === id);
  
  if (!newsItem) {
    return <div>Notícia não encontrada</div>;
  }
   const imagensObj = JSON.parse(newsItem.imagens);
  return (
    <div>
      <Title>{newsItem.titulo}</Title>
        {imagensObj.image_fulltext && (
        <img src={`https://servicodados.ibge.gov.br/api/v3/noticias/?${imagensObj.image_fulltext}`} alt={`Imagem de ${newsItem.titulo}`} />
      )}
    </div>
  )
}

export default Details;