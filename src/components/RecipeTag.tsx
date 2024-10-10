import React from 'react';
import { IRecipeTagProps } from '../types';

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
    const handleClick = () => {
        onSelectTag(tagName);
    };

    return (
        <div >
        <button
            style={{ border: '1px', borderColor: 'black', width:'200px', margin:'1px' }}
            onClick={handleClick}
           
        >
            {tagName}
        </button>
        </div>
        
       
    );
};

export default RecipeTag;