import {values} from 'lodash';

export const selectAllRecipes = ({ recipes }) => values(recipes);

export const notesArray = ({notes}) => Object.keys(notes).map(key => notes[key]);
