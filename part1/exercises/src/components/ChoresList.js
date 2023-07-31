import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <div className={classes.div}>
         <h3 className={classes.choresHeading}>Chores List</h3>
         <p className={classes.choresText}>Watching movie!</p>
         <p className={classes.choresText}>Cooking</p> 
         <p className={classes.choresText}>Reading Books</p> 
         <p className={classes.choresText}>Playing with Kids</p>
      </div> 
         );
}