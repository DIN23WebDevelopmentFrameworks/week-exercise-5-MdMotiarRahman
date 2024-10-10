import React from 'react';
import Recipe from './Recipe';
import { IRecipeListProps } from '../types';

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    if (recipes.length === 0) {
        return <p>No recipes found for this tag.</p>;
    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {recipes.map((recipe) => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;