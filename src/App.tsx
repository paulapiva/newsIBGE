import NewsProvider from './context/Provider';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Favorite from './pages/favorites/favorites';
import Details from './pages/newsDetails/newsDetails';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <NewsProvider>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/favorite" element={ <Favorite /> } />
        <Route path="/news-details/:id" element={ <Details /> } />
      </Routes>
    </NewsProvider>
  )
}

export default App
