import { createContext } from 'react';
import { NewsItem } from '../utils/types';
// import {  } from '../utils/types';

export type ContextType = {
  news: NewsItem[];
  setNews: React.Dispatch<React.SetStateAction<NewsItem[]>>;
};

export const NewsContext = createContext({} as ContextType);
// export const NewsContext = createContext<ContextType | undefined>(undefined);