import { Cabecalho, Noticias, Title } from "../../styles/globalStyles";
import Logo from "../../assets/ibge-logo.png"

function Header() {
  return (
    <Cabecalho>
      <a href="/"><img src={Logo} alt="IBGE logo" /></a>
      <Noticias>Notícias</Noticias>
      <a href="/favorite">Favoritos</a>
    </Cabecalho>
  )
}

export default Header;