import { Cabecalho, Rodape, Title } from "../../styles/globalStyles";
import iconeFB from "../../assets/icone_facebook.png";
import iconeIG from "../../assets/icone_instagram.png";
import iconeYT from "../../assets/icone_youtube.png";

function Footer() {
  return (
    <Rodape>
      <div>
      <a href="https://www.facebook.com/ibgeoficial/"><img src={iconeFB}/></a>
      <a href="https://www.instagram.com/ibgeoficial/"><img src={iconeIG}/></a>
      <a href="https://www.youtube.com/ibgeoficial/"><img src={iconeYT}/></a>
      </div>
      <p>Instituto Brasileiro de Geografia e Estatística - IBGE</p>
    </Rodape>
  )
}

export default Footer;