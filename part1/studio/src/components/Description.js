import styles from './Description.module.css';
import React from 'react';

export default function RecipeAuthor(){
    let authorLink = "http://anitasrecipeblog.blogspot.com";
    let authorPhoto ="http://1.bp.blogspot.com/-Twxzuu8Iihw/Ub5rWucKULI/AAAAAAAABVo/2U3shcKk2vI/s170/DSC_1412.JPG";
    let authorName = "Anita Roberts";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Author" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Anita's Recipe Blog</a> 
           </div>
        </div>
     );
}

