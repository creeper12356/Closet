import React from 'react';
import {Clothes} from '../models/Clothes';

export const ClothesContext = React.createContext<{
  clothesList: Clothes[];
  setClothesList: React.Dispatch<React.SetStateAction<Clothes[]>>;
}>({
  clothesList: [],
  setClothesList: () => {},
});
