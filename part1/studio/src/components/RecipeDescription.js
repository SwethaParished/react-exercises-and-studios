import RecipeAuthor from './components/Description.js';
import React from 'react';

class RecipeDescription extends React.Component{
    render(){
        return (
            <div> 
                <div>
                <h1>Pull Apart Pizza</h1>
                <p>A pull-apart bread which is perfect for parties, this one is made with pepperoni slices but you can add anything you want to it. There are different variations for Pizza Pull-Apart Bread.</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;