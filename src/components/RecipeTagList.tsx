import React from 'react';
import RecipeTag from './RecipeTag';
import { IRecipeTagListProps } from '../types';

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
    return (
        <div>
            <h2>Select a Recipe Tag:</h2>
            <table>
                {tagList.map((tag) => (
                    <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
                ))}
            </table>
        </div>
    );
};

export default RecipeTagList;