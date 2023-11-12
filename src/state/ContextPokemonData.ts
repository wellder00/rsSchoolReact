import { createContext } from 'react';
import { MyContextType } from 'types/interfaces';

const pokemonDataContext = createContext<MyContextType>(null);

export default pokemonDataContext;
