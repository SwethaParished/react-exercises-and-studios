import classes from './MovieList.module.css';

export default function BookList() {
   let pageTitle = "Frozen";
   let book1 = "https://decider.com/wp-content/uploads/2018/11/frozen.jpg?quality=90&strip=all&w=646&h=431&crop=1";
   let book2 = "https://play-lh.googleusercontent.com/1uMZUpqycIK0SDYY92xBtNvdueRYa-yt7govWkTFK2GS-H_8OGAEDHRizDPNNbh0d5i0";
   let book3 = "https://cartoonvibe.com/wp-content/uploads/2023/05/olaf-frozen-character.jpg";

   return (
      <div className = {classes.div}>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Frozen1" width = "300" height = "200" />
         <img src={book2} alt="Frozen2" width = "200" height = "200"/>
         <img src={book3} alt="Olaf" width = "300" height = "200"/>
      </div>      
   );
}