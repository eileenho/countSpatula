import {values} from 'lodash';

export const selectAllRecipes = ({ recipes }) => values(recipes);

export const notesArray = ({notes}) => Object.keys(notes).map(key => notes[key]);

export const tagsArray = ({tags}) => Object.keys(tags).map(key => tags[key]);
