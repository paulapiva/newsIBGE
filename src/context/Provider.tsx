import React, { useEffect, useState } from 'react';
import { NewsContext } from './Context';
import { NewsItem } from '../utils/types';

function NewsProvider({ children }: { children: React.ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>([]);

   useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=7');
      const data = await response.json();
      setNews(data.items || []);
    };

    fetchApi();
  }, []);

  const contextValue = {
    news,
    setNews,
  };

  return (
    <NewsContext.Provider value={contextValue}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsProvider;