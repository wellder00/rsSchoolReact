import { createContext } from 'react';
import { MyContextType } from 'types/interfaces';

const Context = createContext<MyContextType>(null);
export default Context;
