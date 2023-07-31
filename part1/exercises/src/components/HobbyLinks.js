import classes from './HobbyLinks.module.css';

export default function HobbyLinks(){
    let hobbyLinks = ["https://gilmour.com/start-flower-bed", 
    "https://feelingnifty.com/how-to-use-acrylic-paint-beginners/", 
    "https://kidsactivitiesblog.com/50578/stuck-inside-games/"];
    
    
    return (
        <div className={classes.pattern}>
            <h3 className={classes.hobbiesHeading}>Hobbies Lists</h3>
            <ul>
                <li className={classes.listAlign}><a className={classes.hobbiesText} href = {hobbyLinks[0]}>Gardening </a></li>
                <li className={classes.listAlign}><a className={classes.hobbiesText} href = {hobbyLinks[1]}>Art </a></li>
                <li className={classes.listAlign}><a className={classes.hobbiesText} href = {hobbyLinks[2]}>Spending time with Kids </a></li>
            </ul>
        </div>);
}